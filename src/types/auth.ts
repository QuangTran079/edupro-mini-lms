export type AuthUser = {
  name: string;
  email: string;
};

export type AuthContextValue = {
  user: AuthUser | null;
  isLoggedIn: boolean;
  login: (email: string) => void;
  logout: () => void;
};