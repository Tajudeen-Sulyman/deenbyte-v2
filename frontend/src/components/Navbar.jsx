import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const linkClass = ({ isActive }) =>
    `nav-link px-3 ${isActive ? "active fw-semibold" : ""}`;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" onClick={closeMenu}>
          DeenByte
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="navbarNav"
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink
                className={linkClass}
                to="/"
                end
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={linkClass}
                to="/about"
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={linkClass}
                to="/services"
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={linkClass}
                to="/contact"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>

            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <Link
                className="btn btn-light px-4"
                to="/auth/login"
                onClick={closeMenu}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
