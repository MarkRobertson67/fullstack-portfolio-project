import React from "react";
import { Link } from "react-router-dom";
import CarButton from "../assets/CarButton.png";
import LuxuryRidesLogo from "../assets/LuxuryRides.png";

const Logo = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="ml-2" style={{ fontSize: "10px", color: "white", marginTop: "-0px" }}>
        Our Inventory
      </div>
      <Link className="navbar-brand d-flex flex-column align-items-center" to="/products">
        <img
          src={CarButton}
          alt="Car Button Logo"
          className="logo-image"
          style={{
            width: "120px",
            height: "auto",
            transition: "transform 0.3s",
            marginTop: "-20px",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </Link>
    </div>
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
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#616', padding: '0.5rem', height: '100px' }}>
      <div className="container-fluid">
        <Logo />
        <div className="ml-2" style={{ fontSize: "9px", color: "white" }}>
          <p style={{ margin: 0 }}>15839 Auto Lane</p>
          <p style={{ margin: 0 }}>Turboville, NY</p>
          <p style={{ margin: 0 }}>12837</p>
          <p style={{ margin: 0 }}>1-800-CAR-4YOU</p>
          <p style={{ margin: 0 }}>Mark@LuxuryRides.co.uk</p>

        </div>
        <div className="d-flex justify-content-center align-items-center" style={{ flex: "1" }}>
          <center><Title /></center>
        </div>
        <div style={{ fontSize: "10px", color: "white", marginBottom: "10px", marginRight: "17px" }}>
          <p style={{ margin: 0 }}>Hours:</p>
          <p style={{ margin: 0 }}>M-F: 10am - 5pm</p>
          <p style={{ margin: 0 }}>Sat: 8am - 8pm</p>
          <p style={{ margin: 0 }}>Closed Sunday</p>
        </div>
        <div className="ml-auto" style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
          <Link className="nav-link btn btn-danger btn-sm mb-1" to="/products/new" style={{ fontSize: "12px", padding: "0.25rem 0.5rem", color: "white" }}>
            New Car
          </Link>
          <Link className="nav-link btn btn-danger btn-sm" to="/about" style={{ fontSize: "12px", padding: "0.25rem 0.5rem", color: "white" }}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};


export default NavBar;
















