import { apiSlice } from "app/api/apiSlice";
import {
  setRegisterData,
  setLoginData,
  setLogout,
  setRefresh,
  setUser,
} from "./authSlice";

import { toast } from "react-toastify";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: { ...credentials },
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setRegisterData(data.email));
        } catch (err) {
          toast.error(`${err.error.data.message}`);
        }
      },
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setLoginData(data));
        } catch (err) {
          toast.error(`${err.error.data.message}`);
        }
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(setLogout());
        } catch (err) {
          toast.error(`${err.error.data.message}`);
        }
      },
    }),
    refresh: builder.mutation({
      query: (sid) => ({
        url: "/auth/refresh",
        method: "POST",
        body: { sid },
      }),
      async onQueryStarted(id, { getState, dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setRefresh(data));
        } catch (err) {
          toast.error(`${err.error.data.message}`);
        }
      },
    }),
    googleSignin: builder.mutation({
      query: (credentials) => ({
        url: "/auth/refresh",
        method: "GET",
        body: { ...credentials },
      }),
    }),
    getUser: builder.mutation({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
      async onQueryStarted(id, { getState, dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (err) {
          toast.error(`${err.error.data.message}`);
        }
      },
    }),
  }),
});

export const {
  useSigninMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshMutation,
  // useGoogleSigninMutation,
  useGetUserMutation,
} = authApiSlice;
