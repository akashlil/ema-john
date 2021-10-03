import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/order">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory here</NavLink>
      </nav>
    </header>
  );
};

export default Header;
