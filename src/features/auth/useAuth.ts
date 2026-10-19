import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  loggedIn,
  loggedOut,
} from "./authSlice";

export function useAuth() {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const isLoggedIn = user !== null;

  function login(email: string) {
    dispatch(loggedIn(email));
  }

  function logout() {
    dispatch(loggedOut());
  }

  return {
    user,
    isLoggedIn,
    login,
    logout,
  };
}