import React from "react";
import "./Gallery.css";
import add from "../Assets.md/pexels-addie-3152128.jpg";
import kala from "../Assets.md/pexels-kata-pal-1258865.jpg";
import lunvi from "../Assets.md/pexels-konevi-4346403.jpg";
import mehthi from "../Assets.md/pexels-lifekor-13504670.jpg";
import life from "../Assets.md/pexels-mehmet-turgut-kirkgoz-14370502.jpg";

const Gallery = () => {
  return (
    <section className="gallery-main">
        <div className="bc-colour">

       
      <div className="gallery-container">
        <div className="wrapper">
       
        <div className="gallery-content">
          <div className="gallery-heading">
            <p>GALLERY OF OUR TRIPS</p>
          </div>
          <div className="gallery-heading-2">
            <h1>Completed Journey</h1>
          </div>
        </div>
        <div className="gallery-section">
          <div className="first-row">
            <div className="first-image">
              <img src={add} alt="" />
              <div className="gal-content">
                <h1>Europe</h1>
                <div className="gal-para">
                  <p>0 users travel hrere</p>
                </div>
              </div>
              <div className="over"></div>
            </div>
            <div className="second-image">
              <img src={lunvi} alt="" />
              <div className="gal-content">
                <h1>Hajj&Umrah</h1>
                <div className="gal-para">
                  <p>0 users travel hrere</p>
                </div>
              </div>
              <div className="over-2"></div>
            </div>
          </div>
          <div className="second-section">
            <div className="images-3">
              <img src={kala} alt="" />
              <div className="gal-content">
                <h1>Holy Land</h1>
                <div className="gal-para">
                  <p>0 users travel hrere</p>
                </div>
              </div>
              <div className="over"></div>
            </div>
            <div className="images-3">
              <img src={mehthi} alt="" />
              <div className="gal-content">
                <h1>USA</h1>
                <div className="gal-para">
                  <p>0 users travel hrere</p>
                </div>
              </div>
              <div className="over"></div>
            </div>

            <div className="images-3">
              <img src={life} alt="" />
              <div className="gal-content">
                <h1>Singapore</h1>
                <div className="gal-para">
                  <p>0 users travel hrere</p>
                </div>
              </div>
              <div className="over"></div>
            </div>
          </div>
        </div>
        <div className="gallery-btn">
          <button>More journy</button>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Gallery;
