import React from "react";
import "./Footer.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer-main">
      <div className="footer-container">
        <div className="footer-box">
          <div className="first-box">
            <h1 className="main-head">Al-abrar</h1>
            <p className="main-para">Travel and tour agency</p>
            <div className="icc">
              <FaInstagram className="icu" />
              <FaLinkedin className="icu" />
              <FaInstagram className="icu" />
              <FaLinkedin className="icu" />
            </div>
            <p className="main-para">
              1st floor of manathodi cenrer down hill
              <br /> malappuran ,kerala 700494
            </p>
          </div>
          <div className="first-box">
            <h1 className="sii">ABOUT AL-ABRAR</h1>
            <p className="main-para">
              Abrar Travels, founded in 1997, is a<br />
              leading Kerala-based tour operator with
              <br />
              a 25-year legacy. Headquartered in
              <br />
              Malappuram and with branches in
              <br />
              Trissur, we prioritize hospitality,
              <br />
              friendliness, and transparency, serving
              <br />
              over a thousand satisfied customers.
            </p>
          </div>
          <div className="first-box">
            <h1 className="sii">OTHER PAGES</h1>
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          </div>
          <div className="first-box">
            <h1 className="sii">OTHER PAGES</h1>
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="under-line"></div>
        <div className="copey-right">
          <h1>© 2024 Al-Abrar Travel Services</h1>
          <div className="copey-icon">
          <FaInstagram className="icuu" />
              <FaLinkedin className="icuu" />
              <FaInstagram className="icuu" />
              <FaLinkedin className="icuu" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
