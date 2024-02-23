import React from "react";
import "./Hero.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <>
      <section className="hero-page-main">
        <div className="hero-continer">
          <div className="hero-page-content">
            <div className="hero-heading">
              <h1>Explore the world with<br/>Exciting people</h1>
             
            </div>
            <div className="hero-para">
              <p>We help people to find ideal company for the join trips</p>
            </div>
            <div className="hero-btn">
              <button> Starts your trips </button>
            </div>
          </div>
          <div className="hero-line"></div>
          <div className="hero-below">
            <div className="boxes-1">
              <div className="number">
                <h1>01</h1>
              </div>
              <div className="below-heading">
                <p>Choose palce,activiti and time</p>
              </div>
              <div className="below-para">
                <p>
                  Every can choose a root and activity
                  <br />
                  acroding to his taste and possibilities
                </p>
              </div>
            </div>
            <div className="boxes">
              <div className="number">
                <h1>02</h1>
              </div>
              <div className="below-heading">
                <p>Find people who have the same..</p>
              </div>
              <div className="below-para">
                <p>
                  Every can choose a root and activity
                  <br />
                  acroding to his taste and possibilities
                </p>
              </div>
            </div>
            <div className="boxes">
              <div className="number">
                <h1>03</h1>
              </div>
              <div className="below-heading">
                <p>Start chat and offer to go on..</p>
              </div>
              <div className="below-para">
                <p>
                  Every can choose a root and activity
                  <br />
                  acroding to his taste and possibilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
