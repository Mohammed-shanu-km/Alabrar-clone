import React from "react";
import "./Dream.css";
import dream from "../Assets.md/pexels-thisisengineering-3862389.jpg";
import { LiaEyeSolid } from "react-icons/lia";

const Dream = () => {
  return (
    <section className="dream-main">
      <div className="dream-container">
        <div className="dream-main">
          <div className="left-section">
            <img src={dream} alt="" />
          </div>
          <div className="right-section-2">
            <div className="right-content-2">
              <h2>About Us</h2>
              <h1>
                We Will Help You Finding
                <br />
                Your Dream Vacation
              </h1>
              <p style={{ color: "gray" }}>
                Embark on a personalized journey to discover your dream vacation
                with our
                <br />
                expert assistance. Let us guide you to create unforgettable
                memories. Your
                <br />
                dream getaway starts here.
              </p>
            </div>
            <div className="first-boxs">
              <div className="first-box-icons">
                <div className="bc">
                  <LiaEyeSolid
                    style={{
                      height: "40px",
                      width: "40px",
                      marginTop: "20px",
                      marginLeft: "20px",
                      color: "#122f39",
                    }}
                  />
                </div>
              </div>
              <div className="first-box-contents">
                <h2>Our Vision</h2>
                <p>
                  Spark extraordinary journeys, set new standards in
                  personalized,
                  <br />
                  affordable travel. Envision a world where each adventure
                  leaves
                  <br />
                  an indelible mark, creating a global community of fulfilled
                  <br />
                  wanderers.
                </p>
              </div>
            </div>
            <div className="first-boxs">
              <div className="first-box-icons">
                <div className="bc">
                  <LiaEyeSolid
                    style={{
                      height: "40px",
                      width: "40px",
                      marginTop: "20px",
                      marginLeft: "20px",
                      color: "#122f39",
                    }}
                  />
                </div>
              </div>
              <div className="first-box-contents">
                <h2>Our Vision</h2>
                <p>
                  Spark extraordinary journeys, set new standards in
                  personalized,
                  <br />
                  affordable travel. Envision a world where each adventure
                  leaves
                  <br />
                  an indelible mark, creating a global community of fulfilled
                  <br />
                  wanderers.
                </p>
              </div>
            </div>
           <div className="dream-button">
            <button>View Tours</button>

           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dream;
