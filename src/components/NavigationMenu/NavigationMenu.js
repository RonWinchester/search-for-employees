import React from "react";
import { Link, useLocation } from "react-router-dom";
import { links } from "../../constants/constants";

function NavigationMenu() {
  const location = useLocation();

  return (
    <nav className="navigation-menu">
      {links.map((link, index) => (
        <Link key={index}
          className={`navigation-menu__link ${
            location.pathname === link.link ? "navigation-menu__link_active" : ""
          }`}
          to={link.link}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default NavigationMenu;
