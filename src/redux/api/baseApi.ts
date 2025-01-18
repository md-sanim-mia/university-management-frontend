import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/Auth/authSlice";
import { toast } from "sonner";

const beaseQurey = fetchBaseQuery({
  baseUrl: "http://localhost:50001/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", token);
    }
    return headers;
  },
});

const baseQueryWithRefresh: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extaOption): Promise<any> => {
  let result = await beaseQurey(args, api, extaOption);
  console.log(result);
  if (result?.error?.status === 401) {
    console.log("send refresh token");
    const res = await fetch(
      "http://localhost:50001/api/v1/auth/refresh-Token",
      {
        method: "POST",
        credentials: "include",
      }
    );
    const data = await res.json();
    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;
      api.dispatch(setUser({ user, token: data?.data?.accessToken }));
      result = await beaseQurey(args, api, extaOption);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefresh,
  endpoints: () => ({}),
});
