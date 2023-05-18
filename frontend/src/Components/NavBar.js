import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark " style={{ background: 'linear-gradient(to right, #e6e6e6, #333333)' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/products">
          Home
        </Link>
        <h2>
          Welcome to <span className="fw-bold">LuxuryRides</span> find your Dream car
        </h2>
        <div className="collapse navbar-collapse" id="navbarNav">
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
