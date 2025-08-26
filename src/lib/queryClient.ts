"use client";

import { QueryClient } from "@tanstack/react-query";
import { AuthError } from "./withAuthRetry";
import {
  ROUTE_SIGN_IN,
  CACHE_TIME_10_MINUTES,
  CACHE_TIME_5_MINUTES,
} from "@/constants";

function isAuthError(error: unknown): error is AuthError {
  return (
    error instanceof Error &&
    "isAuthError" in error &&
    (error as AuthError).isAuthError === true
  );
}

export function makeQueryClient(handleRedirect: (path: string) => void) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: CACHE_TIME_5_MINUTES,
        gcTime: CACHE_TIME_10_MINUTES,
        retry: (failureCount: number, error: unknown): boolean => {
          if (isAuthError(error)) {
            handleRedirect(ROUTE_SIGN_IN);
            return false;
          }

          if (error instanceof Error && "status" in error) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const status = (error as any).status;
            if (status === 404 || status === 403) return false;
          }

          return failureCount < 3;
        },
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
      },
      mutations: {
        retry: (failureCount: number, error: unknown): boolean => {
          if (isAuthError(error)) {
            handleRedirect(ROUTE_SIGN_IN);
            return false;
          }

          if (error instanceof Error && "status" in error) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const status = (error as any).status;
            if (status === 404 || status === 403) return false;
          }

          return failureCount < 1;
        },
      },
    },
  });

  return queryClient;
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient(handleRedirect: (path: string) => void) {
  if (typeof window === "undefined") {
    return makeQueryClient(handleRedirect);
  } else {
    if (!browserQueryClient)
      browserQueryClient = makeQueryClient(handleRedirect);
    return browserQueryClient;
  }
}
