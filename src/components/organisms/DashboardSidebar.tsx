import { NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/auth/useAuth";

function DashboardSidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/dashboard", { replace: true });
  }

  return (
    <aside className="dashboard-sidebar">
      <p className="dashboard-sidebar__label">MENU</p>

      <nav className="dashboard-sidebar__nav" aria-label="Dashboard navigation">
        <NavLink to="/dashboard" end>
          Overview
        </NavLink>

        <NavLink to="/dashboard/my-courses">My Courses</NavLink>

        <NavLink to="/dashboard/favorites">Favorite</NavLink>

        <NavLink to="/dashboard/settings">Settings</NavLink>
      </nav>

      <div className="dashboard-sidebar__user">
        <strong>{user?.name}</strong>
        <span>{user?.email}</span>

        <button
          type="button"
          className="dashboard-sidebar__logout"
          onClick={handleLogout}
        >
          Sign Out
        </button>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
