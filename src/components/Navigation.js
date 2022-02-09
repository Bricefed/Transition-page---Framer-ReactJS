import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="header">
      <div className="logo">FBrice</div>
      <ul>
        <li>
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
