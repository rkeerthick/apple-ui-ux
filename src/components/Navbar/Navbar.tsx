import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/svg/SVG.svg";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-container__list">
        <li>
          <img src={Logo} alt="logo" className="navbar-container__logo" />
        </li>
        <a href="/" className="navbar-container__list__item">
          <li>Store</li>
        </a>
        <a href="/" className="navbar-container__list__item">
          <li>Mac</li>
        </a>
        <a href="/" className="navbar-container__list__item">
          <li>iPad</li>
        </a>
        <a href="/" className="navbar-container__list__item">
          <li>iPhone</li>
        </a>
        <a href="/" className="navbar-container__list__item">
          <li>Watch</li>
        </a>
        <a href="/" className="navbar-container__list__item">
          <li>Vision</li>
        </a>
        <a href="/" className="navbar-container__list__item">
          <li>AirPods</li>
        </a>
        <a href="/" className="navbar-container__list__item">
          <li>TV & Home</li>
        </a>
        <a href="/" className="navbar-container__list__item">
          <li>Entertainment</li>
        </a>
        <a href="/" className="navbar-container__list__item">
          <li>Accessories</li>
        </a>
        <a href="/" className="navbar-container__list__item">
          <li>Support</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
