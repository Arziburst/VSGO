import { ApiError } from "@/app/types";

export interface ValidationErrorResult {
  success: false;
  errors: Record<string, string[]>;
  message: string;
}

export interface GenericErrorResult {
  success: false;
  message: string;
}

export type ErrorResult = ValidationErrorResult | GenericErrorResult;

export function handleApiError(
  error: unknown,
  defaultMessage: string = "Operation failed"
): ErrorResult {
  const apiError = error as ApiError;

  if ((apiError.status === 422 || apiError.status === 400) && apiError.response?.data?.detail) {
    const errors: Record<string, string[]> = {};
    const detail = apiError.response.data.detail;
    
    if (Array.isArray(detail)) {
      detail.forEach((validationError) => {
        const fieldName = validationError.loc[validationError.loc.length - 1];
        const fieldKey = String(fieldName);
        
        if (!errors[fieldKey]) {
          errors[fieldKey] = [];
        }
        errors[fieldKey].push(validationError.msg);
      });
      
      return {
        success: false,
        errors,
        message: "Validation errors occurred"
      };
    } else if (typeof detail === 'string') {
      return {
        success: false,
        message: detail
      };
    }
  }
  
  return {
    success: false,
    message: defaultMessage
  };
} 