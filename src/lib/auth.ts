import { VSGO_COOKIE, getSecretKey as getSecretKeyString } from "@/constants";
import { cookies } from "next/headers";
import { EncryptJWT, jwtDecrypt } from "jose";

type SimpleRole = string; // single role: "user"

function encodeRoles(roles: SimpleRole[]): SimpleRole[] {
  return Array.isArray(roles) ? roles : [];
}

function decodeRoles(roles: unknown): SimpleRole[] {
  return Array.isArray(roles) ? (roles as string[]) : [];
}

export interface AuthCookieData {
  access_token: string;
  refresh_token: string;
  roles: SimpleRole[];
  lastUpdated?: string;
}

interface AuthCookieStorageData {
  access_token: string;
  refresh_token: string;
  roles: SimpleRole[];
  lastUpdated: string;
  [key: string]: unknown;
}

const getSecretKeyBytes = (): Uint8Array => {
  const secret = getSecretKeyString();
  const key = secret.padEnd(32, "0").slice(0, 32);
  return new TextEncoder().encode(key);
};

async function encryptCookieData(data: AuthCookieStorageData): Promise<string> {
  try {
    const secretKey = getSecretKeyBytes();

    const jwt = await new EncryptJWT(data)
      .setProtectedHeader({ alg: "dir", enc: "A256GCM" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .encrypt(secretKey);

    return jwt;
  } catch {
    throw new Error("Cookie encryption failed");
  }
}

async function decryptCookieData(
  encryptedData: string
): Promise<AuthCookieStorageData | null> {
  try {
    const secretKey = getSecretKeyBytes();

    const { payload } = await jwtDecrypt(encryptedData, secretKey, {
      contentEncryptionAlgorithms: ["A256GCM"],
      keyManagementAlgorithms: ["dir"],
    });

    return payload as unknown as AuthCookieStorageData;
  } catch {
    return null;
  }
}

export async function getAuthCookie(): Promise<string | null> {
  try {
    const cookieStore = await cookies();
    return cookieStore.get(VSGO_COOKIE)?.value || null;
  } catch {
    return null;
  }
}

export async function getAuthCookieData(): Promise<AuthCookieData | null> {
  try {
    const encryptedCookie = await getAuthCookie();
    if (!encryptedCookie) return null;

    const data = await decryptCookieData(encryptedCookie);
    if (!data) return null;

    return {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      roles: decodeRoles(data.roles || []),
      lastUpdated: data.lastUpdated || new Date().getTime().toString(),
    };
  } catch {
    return null;
  }
}

export async function getUserRoles(): Promise<SimpleRole[] | null> {
  try {
    const cookieData = await getAuthCookieData();
    return cookieData?.roles || null;
  } catch {
    return null;
  }
}

export async function parseAuthCookieFromRequest(): Promise<AuthCookieData | null> {
  try {
    const encryptedCookie = await getAuthCookie();
    if (!encryptedCookie) return null;

    const data = await decryptCookieData(encryptedCookie);
    if (!data) return null;

    return {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      roles: decodeRoles(data.roles || []),
      lastUpdated: data.lastUpdated || new Date().getTime().toString(),
    };
  } catch {
    return null;
  }
}

export async function setAuthCookie(data: AuthCookieData): Promise<void> {
  try {
    const cookieStore = await cookies();

    const storageData: AuthCookieStorageData = {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      roles: encodeRoles(data.roles),
      lastUpdated: data.lastUpdated || new Date().getTime().toString(),
    };

    const encryptedData = await encryptCookieData(storageData);

    cookieStore.set(VSGO_COOKIE, encryptedData, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
  } catch {
    // ignore errors
  }
}

export async function clearAuthTokens(): Promise<void> {
  try {
    const cookieStore = await cookies();
    cookieStore.delete(VSGO_COOKIE);
  } catch {
    // ignore errors
  }
}
