import { Navigate, useNavigate } from "react-router-dom";

import LoginForm from "../components/organisms/LoginForm";
import { useAuth } from "../features/auth/useAuth";

function LoginPage() {
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  function handleLogin(email: string) {
    login(email);
    navigate("/dashboard", { replace: true });
  }

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <section className="login-page">
      <div className="login-page__heading">
        <h1>Welcome back</h1>
        <p>Sign in to access your courses and dashboard.</p>
      </div>

      <LoginForm onLogin={handleLogin} />

      <p className="login-page__hint">
        Demo: dùng email hợp lệ và mật khẩu từ 6 ký tự.
      </p>
    </section>
  );
}

export default LoginPage;
