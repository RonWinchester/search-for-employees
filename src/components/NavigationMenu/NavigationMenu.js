import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavigationMenu() {
  const location = useLocation();

  return (
    <nav className="navigation-menu">
      <Link
        className={`navigation-menu__link ${
          location.pathname === "/" ? "navigation-menu__link_active" : ""
        }`}
        to="/"
      >
        Все
      </Link>
      <Link
        className={`navigation-menu__link ${
          location.pathname === "/designer"
            ? "navigation-menu__link_active"
            : ""
        }`}
        to="/designer"
      >
        Designers
      </Link>
      <Link
        className={`navigation-menu__link ${
          location.pathname === "/analysts"
            ? "navigation-menu__link_active"
            : ""
        }`}
        to="/analysts"
      >
        Analysts
      </Link>
      <Link
        className={`navigation-menu__link ${
          location.pathname === "/managers"
            ? "navigation-menu__link_active"
            : ""
        }`}
        to="/managers"
      >
        Managers
      </Link>
      <Link
        className={`navigation-menu__link ${
          location.pathname === "/ios" ? "navigation-menu__link_active" : ""
        }`}
        to="/ios"
      >
        iOS
      </Link>
      <Link
        className={`navigation-menu__link ${
          location.pathname === "/android" ? "navigation-menu__link_active" : ""
        }`}
        to="/android"
      >
        Android
      </Link>
    </nav>
  );
}

export default NavigationMenu;
