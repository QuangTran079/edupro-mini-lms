import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../features/auth/useAuth";

function PrivateRoute() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;
