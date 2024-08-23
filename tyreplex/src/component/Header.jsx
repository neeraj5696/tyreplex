import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Header() {
  return (
    <header className="bg-light py-3 border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
       
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

        
        <nav className="d-none d-md-flex">
          <div className="dropdown ms-4">
            <Link to="/" className=" fw-bold nav-link dropdown-toggle text-dark" id="dropdownCarTyres" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Car Tyres
            </Link>
            <ul className="dropdown-menu" aria-labelledby="dropdownCarTyres">
              <li><Link to="/" className="dropdown-item">a</Link></li>
              <li><Link to="/" className="dropdown-item">b</Link></li>
              <li><Link to="/" className="dropdown-item">c</Link></li>
            </ul>
          </div>

          <div className="dropdown ms-4">
            <Link to="/" className="fw-bold nav-link dropdown-toggle text-dark" id="dropdownBikeTyres" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Bike Tyres
            </Link>
            <ul className="dropdown-menu" aria-labelledby="dropdownBikeTyres">
              <li><Link to="/" className="dropdown-item">a</Link></li>
              <li><Link to="/" className="dropdown-item">b</Link></li>
              <li><Link to="/" className="dropdown-item">c</Link></li>
            </ul>
          </div>

          <div className="dropdown ms-4">
            <Link to="/" className="fw-bold nav-link dropdown-toggle text-dark" id="dropdownTyrePressure" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Tyre Pressure
            </Link>
            <ul className="dropdown-menu" aria-labelledby="dropdownTyrePressure">
              <li><Link to="/" className="dropdown-item">a</Link></li>
              <li><Link to="/" className="dropdown-item">b</Link></li>
              <li><Link to="/" className="dropdown-item">c</Link></li>
            </ul>
          </div>

          <div className="dropdown ms-4">
            <Link to="/" className="fw-bold nav-link dropdown-toggle text-dark" id="dropdownCommercialTyres" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Commercial Tyres
            </Link>
            <ul className="dropdown-menu" aria-labelledby="dropdownCommercialTyres">
              <li><Link to="/" className="dropdown-item">a</Link></li>
              <li><Link to="/" className="dropdown-item">b</Link></li>
              <li><Link to="/" className="dropdown-item">c</Link></li>
            </ul>
          </div>

          <div className="dropdown ms-4">
            <Link to="/" className="fw-bold nav-link dropdown-toggle text-dark" id="dropdownAccessories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Accessories
            </Link>
            <ul className="dropdown-menu" aria-labelledby="dropdownAccessories">
              <li><Link to="/" className="dropdown-item">a</Link></li>
              <li><Link to="/" className="dropdown-item">b</Link></li>
              <li><Link to="/" className="dropdown-item">c</Link></li>
            </ul>
          </div>

          <div className="dropdown ms-4">
            <Link to="/" className="fw-bold nav-link dropdown-toggle text-dark" id="dropdownMore" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More
            </Link>
            <ul className="dropdown-menu" aria-labelledby="dropdownMore">
              <li><Link to="/" className="dropdown-item">a</Link></li>
              <li><Link to="/" className="dropdown-item">b</Link></li>
              <li><Link to="/" className="dropdown-item">c</Link></li>
            </ul>
          </div>
        </nav>

       
        <div className="d-flex align-items-center">
          <FaUserCircle className="me-2" size={24} />
          <Link to="/login" className="btn btn-outline-primary">Login</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
