import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header() {
  return (
    <header className="bg-white shadow-sm py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img
              className="img-fluid"
              width="150"
              height="36"
              src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
              alt="Tyreplex.com"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="d-none d-md-flex align-items-center">
          {/* Car Tyres Dropdown */}
          <div className="dropdown ms-4">
            <Link
              to="/"
              className="fw-semibold nav-link dropdown-toggle text-dark"
              id="dropdownCarTyres"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Car Tyres
            </Link>
            <ul className="dropdown-menu border-0 shadow-sm" aria-labelledby="dropdownCarTyres">
              <li className="dropdown-item">MRF Tyres</li>
              <li className="dropdown-item">CEAT Tyres</li>
              <li className="dropdown-item">Goodyear Tyres</li>
              <li className="dropdown-item">Apollo Tyres</li>
              <li className="dropdown-item">Bridgestone Tyres</li>
              <li className="dropdown-item">JK Tyres</li>
              <li className="dropdown-item">Michelin Tyres</li>
              <li className="dropdown-item">All Car Tyres</li>
            </ul>
          </div>

          {/* Bike Tyres Dropdown */}
          <div className="dropdown ms-4">
            <Link
              to="/"
              className="fw-semibold nav-link dropdown-toggle text-dark"
              id="dropdownBikeTyres"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Bike Tyres
            </Link>
            <ul className="dropdown-menu border-0 shadow-sm" aria-labelledby="dropdownBikeTyres">
              <li className="dropdown-item">MRF Tyres</li>
              <li className="dropdown-item">CEAT Tyres</li>
              <li className="dropdown-item">Goodyear Tyres</li>
              <li className="dropdown-item">Apollo Tyres</li>
              <li className="dropdown-item">Bridgestone Tyres</li>
              <li className="dropdown-item">JK Tyres</li>
              <li className="dropdown-item">Michelin Tyres</li>
              <li className="dropdown-item">All Bike Tyres</li>
            </ul>
          </div>

          {/* Tyre Pressure Dropdown */}
          <div className="dropdown ms-4">
            <Link
              to="/"
              className="fw-semibold nav-link dropdown-toggle text-dark"
              id="dropdownTyrePressure"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Tyre Pressure
            </Link>
            <ul className="dropdown-menu border-0 shadow-sm" aria-labelledby="dropdownTyrePressure">
              <li className="dropdown-item">MRF Tyres</li>
              <li className="dropdown-item">CEAT Tyres</li>
              <li className="dropdown-item">Goodyear Tyres</li>
              <li className="dropdown-item">Apollo Tyres</li>
              <li className="dropdown-item">Bridgestone Tyres</li>
              <li className="dropdown-item">JK Tyres</li>
              <li className="dropdown-item">Michelin Tyres</li>
              <li className="dropdown-item">All Tyre Pressure</li>
            </ul>
          </div>

          {/* More Dropdown */}
          <div className="dropdown ms-4">
            <Link
              to="/"
              className="fw-semibold nav-link dropdown-toggle text-dark"
              id="dropdownMore"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </Link>
            <ul className="dropdown-menu border-0 shadow-sm" aria-labelledby="dropdownMore">
              <li className="dropdown-item">Accessories</li>
              <li className="dropdown-item">Offers</li>
              <li className="dropdown-item">Contact Us</li>
            </ul>
          </div>
        </nav>

        {/* Login Section */}
        <div className="d-flex align-items-center">
          <FaUserCircle className="me-2 text-primary" size={28} />
          <Link to="/login" className="btn btn-outline-primary fw-semibold">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
