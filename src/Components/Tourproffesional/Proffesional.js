import React from "react";
import "./Proffesional.css";
import { FaMobileRetro } from "react-icons/fa6";
import arrow from "../Assets.md/arrow.png";
import arrow1 from "../Assets.md/arrow.png";
import { CiAirportSign1 } from "react-icons/ci";
import { GiWitchFlight } from "react-icons/gi";

const Proffesional = () => {
  return (
    <section className="proffecional-main">
      <div className="proffecional-container">
        <div className="proffecional-content">
          <h2>Why Choose Us</h2>
          <h1>We are Professional Planners for Your Vacations</h1>
          <p>
            Entrust your vacations to us, where professionalism meets passion.
            Our experienced planners craft
            <br />
            personalized trips, guaranteeing memorable moments and worry-free
            travel. Your dream vacation
            <br />
            awaits.
          </p>
        </div>
        <div className="trip-way">
          <div className="trip-way-first-box-margin-top">
            <div className="trip-icon">
              <FaMobileRetro className="qam" />

              <div className="blue-count">
                <h2>01</h2>
              </div>
            </div>
            <h1>Book a Tour</h1>
            <p>
              Select your adventure,
              <br /> choose dates, and book
              <br /> your dream journey <br />
              effortlessly.
            </p>
          </div>
          <div className="arrow-image">
            <img src={arrow} alt="" />
          </div>
          <div className="trip-way-first-box">
            <div className="trip-icon">
              <FaMobileRetro className="qam" />

              <div className="blue-count">
                <h2>01</h2>
              </div>
            </div>
            <h1>
              Payment
              <br /> Process
            </h1>
            <p>
              Select your adventure,
              <br /> choose dates, and book
              <br /> your dream journey <br />
              effortlessly.
            </p>
          </div>
          <div className="arrow-image-2">
            <img src={arrow1} alt="" />
          </div>
          <div className="trip-way-first-box-margin-top">
            <div className="trip-icon">
              <FaMobileRetro className="qam" />

              <div className="blue-count">
                <h2>01</h2>
              </div>
            </div>
            <h1>Confarmation</h1>
            <p>
              Select your adventure,
              <br /> choose dates, and book
              <br /> your dream journey <br />
              effortlessly.
            </p>
          </div>
          <div className="arrow-image">
            <img src={arrow} alt="" />
          </div>
          <div className="trip-way-first-box">
            <div className="trip-icon">
              <FaMobileRetro className="qam" />
              <div className="blue-count">
                <h2>01</h2>
              </div>
            </div>

            <h1>Book Your trip</h1>
            <p>
              Select your adventure,
              <br /> choose dates, and book
              <br /> your dream journey <br />
              effortlessly.
            </p>
          </div>
        </div>
        <div className="prfossional-line"></div>
        <div className="prfossional-icons-para">
          <div className="prfossional-box">
            <div className="prfossional-icons">
            <GiWitchFlight className="han"  />
              <h2>Trippfy</h2>
            </div>
          </div>
          <div className="prfossional-box">
            <div className="prfossional-icons">
               
              <GiWitchFlight className="han"  />
              <h2>Trippfy</h2>
            </div>
          </div>
          <div className="prfossional-box">
            <div className="prfossional-icons">
            <GiWitchFlight className="han"  />
              <h2>Trippfy</h2>
            </div>
          </div>
          <div className="prfossional-box">
            <div className="prfossional-icons">
            <GiWitchFlight className="han"  />
              <h2>Trippfy</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proffesional;
