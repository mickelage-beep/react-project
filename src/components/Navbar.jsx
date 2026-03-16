import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">Grand Hotel</div>

      <nav className = "navLinks">
        <NavLink to="/" end>
          Hem
        </NavLink>

        <NavLink to="/rooms">
          Rum
        </NavLink>

        <NavLink to="/restaurant">
          Restaurang
        </NavLink>

        <NavLink to="/contact">
          Kontakt
        </NavLink>

        <NavLink 
          to="/booking"
          className={({ isActive }) => `btnNav ${isActive ? 'active' : ''}`}
        >
          Boka
        </NavLink>

      </nav>

    </header>
  )
}