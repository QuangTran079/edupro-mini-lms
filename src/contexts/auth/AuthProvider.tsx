import { useState } from "react";
import type { ReactNode } from "react";

import type { AuthUser } from "../../types/auth";
import { AuthContext } from "./authContext";

type AuthProviderProps = {
  children: ReactNode;
};

const STORAGE_KEY = "edupro-user";

function readStoredUser(): AuthUser | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return null;
    }

    const data: unknown = JSON.parse(stored);

    if (
      typeof data === "object" &&
      data !== null &&
      "email" in data &&
      "name" in data &&
      typeof data.email === "string" &&
      typeof data.name === "string"
    ) {
      return {
        email: data.email,
        name: data.name,
      };
    }

    return null;
  } catch {
    return null;
  }
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(readStoredUser);

  const isLoggedIn = user !== null;

  function login(email: string) {
    const nextUser: AuthUser = {
      email,
      name: email.split("@")[0],
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;