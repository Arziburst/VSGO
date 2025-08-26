export type UserWithOrganization = {
  id: number;
  email: string;
  roles: string[];
};

export type ActionState = {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
  redirectTo?: string;
  user?: UserWithOrganization;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: Record<string, any>;
};

export type ApiError = {
  status: number;
  response?: {
    data?: {
      detail?: Array<{
        loc: Array<string | number>;
        msg: string;
        type: string;
      }>;
    };
  };
};
