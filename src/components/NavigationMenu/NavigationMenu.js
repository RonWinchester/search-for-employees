import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu() {
  return (
    <nav className="navigation-menu">
      <Link className="navigation-menu__link navigation-menu__link_active" to="/">Все</Link>
      <Link className="navigation-menu__link" to="/designer">Designers</Link>
      <Link className="navigation-menu__link" to="/analysts">Analysts</Link>
      <Link className="navigation-menu__link" to="/managers">Managers</Link>
      <Link className="navigation-menu__link" to="/ios">iOS</Link>
      <Link className="navigation-menu__link" to="/android">Android</Link>
    </nav>
  );
}

export default NavigationMenu;
