import { useState } from "react";
import type { ReactNode } from "react";
import type { AuthUser } from "../../types/auth";
import { AuthContext } from "./authContext";


type AuthProviderProps = {
  children: ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  // 1. Lưu người dùng hiện tại
  const [user, setUser] = useState<AuthUser | null>(null);

  // 2. Tính trạng thái đăng nhập
  const isLoggedIn = user !== null;

  // 3. Đăng nhập
  function login(email: string) {
  setUser({
    email,
    name: email.split("@")[0],
  });
}

  // 4. Đăng xuất
  function logout() {
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