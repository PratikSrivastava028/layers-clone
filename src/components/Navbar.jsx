import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Layers</div>

      <div className="navbar__links">
        <a href="#">Home</a>
        <a href="#">Collection</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <FiShoppingCart className="navbar__cart" />
      </div>
    </nav>
  );
};

export default Navbar;
