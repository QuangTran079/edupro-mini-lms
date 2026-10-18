import { useState } from "react";
import type { SubmitEvent } from "react";

type LoginFormProps = {
  onLogin: (email: string) => void;
};

function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = email.trim();

    if (!normalizedEmail || !password) {
      setError("Vui lòng nhập email và mật khẩu.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setError("Vui lòng nhập email hợp lệ.");
      return;
    }

    if (password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự.");
      return;
    }

    setError("");
    onLogin(normalizedEmail);
  }

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <div className="login-form__field">
        <label htmlFor="login-email">Email address</label>

        <input
          id="login-email"
          name="email"
          type="email"
          autoComplete="username"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <div className="login-form__field">
        <label htmlFor="login-password">Password</label>

        <input
          id="login-password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Ít nhất 6 ký tự"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          minLength={6}
        />
      </div>

      {error && (
        <p className="login-form__error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="login-form__submit">
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;