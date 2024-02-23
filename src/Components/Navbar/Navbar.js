import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <nav>
          <a className="logo" href="#">
            <span>Al-</span>abrar
          </a>
          <label for="toggler">
            <i class="fa fa-bars"></i>
          </label>
          <input type="checkbox" id="toggler" name="" />
          <div class="menu">
            <ul class="list">
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>

              <li>
                <Link to={'/tour'}>Tour</Link>
              </li>
              <li>
                <Link to={'/blog'}>Blogs</Link>
              </li>
              <li>
              <Link to={'/contact'}>Contact</Link>
               
              </li>
            </ul>
          </div>
          <div className="navabar-button">
            <button>Contact us</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
