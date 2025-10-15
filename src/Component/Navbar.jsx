import React from 'react';
import '../App.css'; // Custom styles
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar shadow-lg">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold fs-4" href="#">HASSAN ECOMMERCE</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="flex-auto d-flex align-items-center gap-5  flex-column flex-lg-row  pt-3 pt-lg-0
         pt-10 justify-self-center " id="">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="/service">
                Services
              </Link>
            </li>
              

              
          </ul>

        

          <div className=" align-items-center gap-3 social-wrapper flex flex-row-reverse">
            <Link href="#" className="social-icon facebook" title="Facebook">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" className="social-icon instagram" title="Instagram">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#" className="social-icon whatsapp" title="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
