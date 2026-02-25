import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faUsers,
  faClipboardList,
  faBoxOpen,
  faMoon,
  faSun,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: faTachometerAlt },
    { name: "Users", path: "/dashboard/list", icon: faUsers },
    { name: "Registration", path: "/dashboard/registration", icon: faClipboardList },
    { name: "Products", path: "/dashboard/products", icon: faBoxOpen },
  ];

  const handleToggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.body.classList.add("dark");   
      } else {
        document.body.classList.remove("dark");
      }
      return newMode;
    });
  };

  const handleSignOut = () => {
    navigate("/"); // redirect to signin page
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>🚀 Admin Panel</h2>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <FontAwesomeIcon icon={item.icon} className="menu-icon" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        {/* Dark/Light mode toggle */}
        <button className="theme-btn" onClick={handleToggleTheme}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>

        {/* Sign Out button */}
        <button className="signout-btn" onClick={handleSignOut}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}