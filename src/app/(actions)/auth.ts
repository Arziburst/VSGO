"use server";

import { redirect } from "next/navigation";
import { ROUTE_SIGN_IN, ROUTE_ROOT } from "@/constants";
import { getApiClient } from "@/lib/useApiClient";
import { clearAuthTokens, setAuthCookie } from "@/lib/auth";
import { ActionState } from "@/app/types";
import { handleApiError } from "@/lib/apiErrorHandler";

export async function logoutAction() {
  try {
    const { authApi } = await getApiClient();
    await authApi.logoutAuthLogoutPost();
    await clearAuthTokens();
  } catch {
    await clearAuthTokens();
  }

  redirect(ROUTE_SIGN_IN);
}

export async function refreshAuthCookie(): Promise<{
  success: boolean;
  shouldRedirect: boolean;
}> {
  try {
    const { authApi, cookieData } = await getApiClient();

    if (!cookieData?.refresh_token) {
      await clearAuthTokens();
      return { success: false, shouldRedirect: true };
    }

    const response = await authApi.refreshAccessTokenAuthRefreshPost({
      refresh_token: cookieData.refresh_token,
    });

    if (response.data) {
      const { access_token, refresh_token, user } = response.data;

      if (access_token && refresh_token && user) {
        await setAuthCookie({
          access_token,
          refresh_token,
          roles: user.roles || [],
        });

        return { success: true, shouldRedirect: false };
      }
    }

    await clearAuthTokens();
    return { success: false, shouldRedirect: true };
  } catch {
    try {
      await clearAuthTokens();
    } catch {
      // ignore cleanup errors
    }

    return { success: false, shouldRedirect: true };
  }
}

export async function signInAction(
  prevState: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      return {
        success: false,
        message: "Email and password are required",
        errors: {
          email: !email ? ["Email is required"] : [],
          password: !password ? ["Password is required"] : [],
        },
      };
    }

    const { authApi } = await getApiClient();

    const response = await authApi.loginAuthTokenPost(
      email,
      password,
      "password",
      "",
      null,
      null
    );

    const { access_token, refresh_token, user } = response.data;

    if (access_token && refresh_token) {
      await setAuthCookie({
        access_token: access_token,
        refresh_token: refresh_token,
        roles: user.roles,
      });

      const redirectPath: string = ROUTE_ROOT;

      return {
        success: true,
        message: "Login successful!",
        redirectTo: redirectPath,
        user: user,
      };
    } else {
      return {
        success: false,
        message: "Login failed. Please try again.",
      };
    }
  } catch (error: unknown) {
    return handleApiError(error, "Login failed. Please try again.");
  }
}

export async function signUpAction(
  prevState: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const role = "user";

    if (!email || !password || !confirmPassword) {
      return {
        success: false,
        errors: {
          email: !email ? ["Email is required"] : [],
          password: !password ? ["Password is required"] : [],
          confirmPassword: !confirmPassword
            ? ["Confirm password is required"]
            : [],
        },
      };
    }

    if (password !== confirmPassword) {
      return {
        success: false,
        errors: {
          confirmPassword: ["Passwords do not match"],
        },
      };
    }

    const { authApi } = await getApiClient();

    const response = await authApi.registerAuthRegisterPost({
      email,
      password,
      name: email.split("@")[0],
      affiliation_type: role,
      role,
    });

    const { access_token, refresh_token, user } = response.data;

    if (access_token && refresh_token) {
      await setAuthCookie({
        access_token: access_token,
        refresh_token: refresh_token,
        roles: user.roles,
      });

      const redirectPath: string = ROUTE_ROOT;

      return {
        success: true,
        message: "Registration successful!",
        redirectTo: redirectPath,
        user: user,
      };
    } else {
      return {
        success: false,
        message: "Registration failed. Please try again.",
      };
    }
  } catch (error: unknown) {
    return handleApiError(error, "Registration failed. Please try again.");
  }
}
