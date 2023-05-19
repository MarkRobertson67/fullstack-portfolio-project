import { Link } from "react-router-dom";
import CarButton from "../assets/CarButton.png";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
      <Link
          className="navbar-brand d-flex flex-column align-items-center"
          to="/products"
        >
          <img
            src={CarButton}
            alt="LuxuryRides Logo"
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
        <div className="d-flex flex-grow-1 justify-content-center align-items-center">
          <h2 className="navbar-title text-white text-center m-0" style={{
        textAlign: "center",
        fontFamily: "Comic Sans MS, cursive",
        background: "linear-gradient(to right, red, white, blue)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}>
            <span className="fw-bold">LuxuryRides</span>
          </h2>
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
}





