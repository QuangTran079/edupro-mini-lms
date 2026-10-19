import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth/useAuth";

function Header() {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="brand">
          <span className="brand__icon">E</span>
          <span>EduPro</span>
        </NavLink>

        <nav className="header__nav" aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="dashboard/favorites">Favorites</NavLink>
        </nav>

        {isLoggedIn ? (
          <div className="header__auth">
            <span className="header__username">{user?.name}</span>

            <button
              type="button"
              className="header__logout"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <NavLink to="/login" className="header__login">
            Log In
          </NavLink>
        )}

        
      </div>
    </header>
  );
}

export default Header;
