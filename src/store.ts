import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";
import {
  readStoredUser,
  saveStoredUser,
} from "./features/auth/authStorage";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },

  preloadedState: {
    auth: {
      user: readStoredUser(),
    },
  },
});

// Chỉ ghi storage khi người dùng thay đổi
let previousUser = store.getState().auth.user;

store.subscribe(() => {
  const currentUser = store.getState().auth.user;

  if (currentUser !== previousUser) {
    previousUser = currentUser;
    saveStoredUser(currentUser);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;