"use server";

import { getVsgoRoot } from "../constants";
import { getAuthCookieData } from "./auth";
import { MockAuthApi } from "./mocks/authApi";

export const createApiClients = async (_accessToken?: string) => {
  const _basePath = getVsgoRoot();
  return {
    authApi: new MockAuthApi(),
  };
};

export const getApiClient = async () => {
  const cookieData = await getAuthCookieData();
  const apiClients = await createApiClients(cookieData?.access_token);

  return {
    cookieData,
    ...apiClients,
  };
};
