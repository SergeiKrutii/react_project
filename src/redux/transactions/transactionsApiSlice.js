import { apiSlice } from "app/api/apiSlice";
import {
  setIncome,
  setExpense,
  setIncCategory,
  setExpCategory,
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
      }),
      providesTags: ["Transactions"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setIncome(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),

    addExpense: builder.mutation({
      query: (data) => ({
        url: "/transaction/expense",
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["Transactions"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setExpense(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),

    getExpense: builder.query({
      query: () => ({
        url: "/transaction/expense",
        method: "GET",
      }),
      providesTags: ["Transactions"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setExpense(data));
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
      }),
      providesTags: ["Transactions"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setIncCategory(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    expenseCategory: builder.query({
      query: () => ({
        url: "/transaction/expense-categories",
        method: "GET",
      }),
      providesTags: ["Transactions"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setExpCategory(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    periodData: builder.mutation({
      query: (date) => ({
        url: `/transaction/period-data?date=${date}`,
        method: "GET",
      }),
      providesTags: ["Transactions"],
      async onQueryStarted(id, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const {
  useAddExpenseMutation,
  useAddIncomeMutation,
  useDeleteTransactionMutation,
  useExpenseCategoryQuery,
  useGetExpenseQuery,
  useGetIncomeQuery,
  useIncomeCategoryQuery,
  usePeriodDataMutation,
} = transactionsApiSlice;
