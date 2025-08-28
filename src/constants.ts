/* eslint-disable no-console */
import { v4 as uuidv4 } from "uuid";

export const ROLE_USER = "user" as const;

export const VSGO_COOKIE = "vsgo_cookie" as const;

export const ROUTE_SIGN_IN = "/sign-in" as const;
export const ROUTE_SIGN_UP = "/sign-up" as const;

export const ROUTE_ROOT = "/" as const;

export const DEFAULT_THEME = "system" as const;

export const THEME_STORAGE_KEY = "vsgo-theme" as const;

export const ROUTE_MEMBERS = "/members" as const;
export const ROUTE_OFFICES = "/offices" as const;
export const ROUTE_LEGISLATION = "/legislation" as const;
export const ROUTE_ACTIVITIES = "/activities" as const;
export const ROUTE_GALLERY = "/gallery" as const;
export const ROUTE_NEWS = "/news" as const;
export const ROUTE_CONTACTS = "/contacts" as const;
export const ROUTE_STATUS = "/status" as const;
export const ROUTE_STRUCTURE = "/structure" as const;
export const ROUTE_MEMBERSHIP = "/membership" as const;
export const ROUTE_RIGHTS = "/rights" as const;
export const ROUTE_TASKS = "/tasks" as const;

export const CACHE_TIME_5_MINUTES = 5 * 60 * 1000;
export const CACHE_TIME_10_MINUTES = 10 * 60 * 1000;

export const getVsgoRoot = (): string => {
  if (typeof window !== "undefined") {
    return "http://localhost:8000";
  }

  const preciseRoot = process.env.API_ROOT;

  if (!preciseRoot || preciseRoot.trim() === "") {
    console.warn(
      "API_ROOT is not set in environment variables, generating a default value"
    );

    return "http://localhost:8000";
  }

  return preciseRoot.trim();
};

export const getSecretKey = (): string => {
  if (typeof window !== "undefined") {
    return uuidv4();
  }

  const secretKey = process.env.SECRET_KEY;

  if (!secretKey || secretKey.trim() === "") {
    console.warn(
      "SECRET_KEY is not set in environment variables, generating a default value"
    );

    return "let t=10;setInterval(_=>console.log(t--),2000)";
  }

  return secretKey.trim();
};
