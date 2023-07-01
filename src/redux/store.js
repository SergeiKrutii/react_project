import { apiSlice } from "app/api/apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import storage from "redux-persist/lib/storage";
import authReducer from "redux/auth/authSlice";
import transactionReducer from "redux/transactions/transactionsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "refreshToken", "sessionId"],
};

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
    transactions: transactionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
