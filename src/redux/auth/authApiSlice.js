import { apiSlice } from "app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: { ...credentials },
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        // `onStart` side-effect
        // dispatch(messageCreated('Fetching post...'))
        try {
          const { data } = await queryFulfilled;
          // `onSuccess` side-effect
          //   dispatch(messageCreated('Post received!'))
        } catch (err) {
          // `onError` side-effect
          //   dispatch(messageCreated('Error fetching post!'))
        }
      },
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    refresh: builder.mutation({
      query: (sessionId) => ({
        url: "/auth/refresh",
        method: "POST",
        body: { ...sessionId },
      }),
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
  useGoogleSigninMutation,
} = authApiSlice;
