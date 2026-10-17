import { NavLink } from "react-router-dom";

function Header() {
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
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>

        <nav className="header__auth">
            <button>Login</button>
        </nav>

        
      </div>
    </header>
  );
}

export default Header;
