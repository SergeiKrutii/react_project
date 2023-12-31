import { apiSlice } from "app/api/apiSlice";
import {
  setLoginData,
  setLogout,
  setRefresh,
  setUser,
  setIsrefreshToken,
  setBalance,
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
          await queryFulfilled;
        } catch (err) {
          toast.error(`${err.error.data.message}`);
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
          toast.error(`${err.error.data.message}`);
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
      query: (sessionId) => ({
        url: "/auth/refresh",
        method: "POST",
        body: { sid: sessionId },
      }),

      async onQueryStarted(_, { getState, dispatch, queryFulfilled }) {
        dispatch(setIsrefreshToken());
        try {
          const { data } = await queryFulfilled;
          dispatch(setRefresh(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    googleSignin: builder.query({
      query: (credentials) => ({
        url: "/auth/refresh",
        method: "GET",
        body: { ...credentials },
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
      providesTags: ["Transactions"],
      async onQueryStarted(id, { getState, dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    setUserBalance: builder.mutation({
      query: (newBalance) => ({
        url: "/user/balance",
        method: "PATCH",
        body: newBalance,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setBalance(data));
        } catch (err) {
          console.log(err);
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
  useGoogleSigninQuery,
  useGetUserQuery,
  useSetUserBalanceMutation,
} = authApiSlice;
