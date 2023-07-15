import { apiSlice } from "app/api/apiSlice";
import {
  setIncome,
  setExpence,
  setIncCategory,
  setExpCategory,
  setTransactionPeriod,
} from "./transactionsSlice";

export const transactionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addIncome: builder.mutation({
      query: (data) => ({
        url: "/transaction/income",
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["Transactions"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setIncome(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getIncome: builder.query({
      query: () => ({
        url: "/transaction/income",
        method: "GET",
        providesTags: ["Transactions"],
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setIncome(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    addExpence: builder.mutation({
      query: (data) => ({
        url: "/transaction/expense",
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["Transactions"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("🚀 ~ data:", data);
          dispatch(setExpence(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getExpence: builder.query({
      query: () => ({
        url: "/transaction/expense",
        method: "GET",
        providesTags: ["Transactions"],
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setExpence(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    deleteTransaction: builder.mutation({
      query: (id) => ({
        url: `/transaction/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Transactions"],
    }),
    incomeCategory: builder.query({
      query: () => ({
        url: "/transaction/income-categories",
        method: "GET",
        providesTags: ["Transactions"],
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setIncCategory(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    expenceCategory: builder.query({
      query: () => ({
        url: "/transaction/expense-categories",
        method: "GET",
        providesTags: ["Transactions"],
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setExpCategory(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    periodData: builder.query({
      query: (date) => ({
        url: "/transaction/period-data",
        method: "GET",
        headers: date,
        providesTags: ["Transactions"],
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setTransactionPeriod(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const {
  useAddExpenceMutation,
  useAddIncomeMutation,
  useDeleteTransactionMutation,
  useExpenceCategoryQuery,
  useGetExpenceQuery,
  useGetIncomeQuery,
  useIncomeCategoryQuery,
  usePeriodDataQuery,
} = transactionsApiSlice;
