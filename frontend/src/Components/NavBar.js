import React from "react";
import { Link } from "react-router-dom";
import CarButton from "../assets/CarButton.png";
import LuxuryRidesLogo from "../assets/LuxuryRides.png";

const Logo = () => {
  return (
    <Link className="navbar-brand d-flex flex-column align-items-center" to="/products">
      <img
        src={CarButton}
        alt="Car Button Logo"
        className="logo-image"
        style={{
          width: "120px",
          height: "auto",
          transition: "transform 0.3s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
      <div className="ml-2" style={{ fontSize: "14px" }}>
        Our Inventory
      </div>
    </Link>
  );
};

const Title = () => {
  return (
    <img
      src={LuxuryRidesLogo}
      alt="LuxuryRides Logo"
      className="logo-image"
      style={{
        width: "275px",
        height: "auto",
      }}
    />
  );
};

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#616' }}>
      <div className="container-fluid">
        <Logo />
        <div className="d-flex flex-grow-1 justify-content-center align-items-center">
          <Title />
        </div>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link btn btn-danger me-2 shadow-sm" to="/products/new">
                New Car
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-danger shadow-sm" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;






