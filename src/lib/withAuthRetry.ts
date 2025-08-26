import { redirect } from "next/navigation";
import { refreshAuthCookie } from "@/app/(actions)/auth";
import { ROUTE_SIGN_IN } from "@/constants";
import { handleApiError } from "@/lib/apiErrorHandler";

export interface AuthError extends Error {
  status: number;
  isAuthError: true;
}

export function withAuthRetry<TArgs extends unknown[], TReturn>(
  fn: (...args: TArgs) => Promise<TReturn>,
  maxRetries: number = 1,
  options: {
    handleApiErrors?: boolean;
    defaultErrorMessage?: string;
  } = {}
) {
  const { handleApiErrors = false, defaultErrorMessage = "Operation failed" } =
    options;

  return async (...args: TArgs): Promise<TReturn> => {
    let attempts = 0;

    while (attempts <= maxRetries) {
      try {
        return await fn(...args);
      } catch (error) {
        attempts++;
        const is401 =
          typeof error === "object" &&
          error !== null &&
          "status" in error &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (error as any).status === 401;

        if (is401 && attempts <= maxRetries) {
          const refreshResult = await refreshAuthCookie();
          if (refreshResult.success) {
            continue;
          } else {
            if (refreshResult.shouldRedirect) {
              redirect(ROUTE_SIGN_IN);
            }

            const authError = new Error(
              "Authentication expired. Please login again."
            ) as AuthError;
            authError.status = 401;
            authError.isAuthError = true;
            throw authError;
          }
        }

        if (handleApiErrors && !is401) {
          const errorResult = handleApiError(error, defaultErrorMessage);
          return errorResult as TReturn;
        }

        throw error;
      }
    }

    if (handleApiErrors) {
      const errorResult = handleApiError(
        new Error("Max retry attempts exceeded"),
        defaultErrorMessage
      );
      return errorResult as TReturn;
    }

    const maxRetriesError = new Error(
      "Max retry attempts exceeded"
    ) as AuthError;
    maxRetriesError.status = 401;
    maxRetriesError.isAuthError = true;
    throw maxRetriesError;
  };
}

export function withPrivateApi<TArgs extends unknown[], TReturn>(
  fn: (...args: TArgs) => Promise<TReturn>,
  defaultErrorMessage?: string
) {
  return withAuthRetry(fn, 1, {
    handleApiErrors: true,
    defaultErrorMessage,
  });
}
