import { apiSlice } from "app/api/apiSlice";
import {
  setRegisterData,
  setLoginData,
  setLogout,
  setRefresh,
} from "./authSlice";

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
          console.log(err);
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
          console.log(err);
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
          console.log(err);
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
          console.log(err);
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
  }),
});

export const {
  useSigninMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshMutation,
  // useGoogleSigninMutation,
} = authApiSlice;
