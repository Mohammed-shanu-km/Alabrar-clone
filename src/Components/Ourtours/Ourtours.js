import React from "react";
import "./Ourtour.css";
import cardimage from "../Assets.md/pexels-oday-hazeem-106606.jpg";
import { SlCalender } from "react-icons/sl";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import { IoLocationSharp } from "react-icons/io5";
import cardimage2 from '../Assets.md/pexels-mehmet-turgut-kirkgoz-14370502.jpg'
import cardimage3 from '../Assets.md/pexels-silvia-trigo-2675268.jpg'

const Ourtours = () => {
  return (
    <section className="out-tour-main">
      <div className="tour-contents">
        <h2>Our Tours</h2>
        <h1>Popular Tours For You</h1>
        <p>
          Elevate your travel experience with our handpicked selection of tours.
          Uncover hidden gems, savor unique
          <br />
          cuisines, and embrace the extraordinary. Book your journey and
          redefine your wanderlust
        </p>
      </div>
      <div className="card-section">
        <div className="card-main">
          <div className="card-image">
            <img src={cardimage} alt />
          </div>
          <div className="card-content">
            <div className="white-content">
              <div className="first-1">
                <SlCalender
                  style={{ height: "50px", width: "20px", color: "#d9ed82" }}
                />
                <p className="day">21 days</p>
              </div>
              <div className="line">
                <LiaGripLinesVerticalSolid
                  style={{ height: "50px", width: "20px", color: "#d9ed82" }}
                />
              </div>
              <div className="first-2">
                <div className="first-1">
                  <SlCalender
                    style={{ height: "50px", width: "20px", color: "#d9ed82" }}
                  />
                  <p className="day">21 days</p>
                </div>
              </div>
            </div>
          
          </div>
          <div className="card-below">
         
            <h1>Sapiente quod sint </h1>

        
                
            <h2><IoLocationSharp  style={{color:"#d9ed82"}}/> Error omnis voluptat</h2>

        
         
            <div className="under-lines"></div>
            <div className="last">
                <div className="rupess">
                    <p>From</p>
                    <h1>890.00</h1>
                </div>
                <div className="yoo">
                    <h2>expolre</h2>
                </div>


            </div>

        </div>
        </div>
        <div className="card-main">
          <div className="card-image">
            <img src={cardimage2} alt />
          </div>
          <div className="card-content">
            <div className="white-content">
              <div className="first-1">
                <SlCalender
                  style={{ height: "50px", width: "20px", color: "#d9ed82" }}
                />
                <p className="day">21 days</p>
              </div>
              <div className="line">
                <LiaGripLinesVerticalSolid
                  style={{ height: "50px", width: "20px", color: "#d9ed82" }}
                />
              </div>
              <div className="first-2">
                <div className="first-1">
                  <SlCalender
                    style={{ height: "50px", width: "20px", color: "#d9ed82" }}
                  />
                  <p className="day">21 days</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-below">
         
         <h1>Sapiente quod sint </h1>

     
             
         <h2><IoLocationSharp style={{color:"#d9ed82"}} /> Error omnis voluptat</h2>

     
      
         <div className="under-lines"></div>
         <div className="last">
             <div className="rupess">
                 <p>From</p>
                 <h1>890.00</h1>
             </div>
             <div className="yoo">
                 <h2 >expolre</h2>
             </div>


         </div>

     </div>
        </div>
        <div className="card-main">
          <div className="card-image">
            <img src={cardimage3} alt />
          </div>
          <div className="card-content">
            <div className="white-content">
              <div className="first-1">
                <SlCalender
                  style={{ height: "50px", width: "20px", color: "#d9ed82" }}
                />
                <p className="day">21 days</p>
              </div>
              <div className="line">
                <LiaGripLinesVerticalSolid
                  style={{ height: "50px", width: "20px", color: "#d9ed82" }}
                />
              </div>
              <div className="first-2">
                <div className="first-1">
                  <SlCalender
                    style={{ height: "50px", width: "20px", color: "#d9ed82" }}
                  />
                  <p className="day">21 days</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-below">
         
         <h1>Sapiente quod sint </h1>

     
             
         <h2><IoLocationSharp style={{color:"#d9ed82"}} /> Error omnis voluptat</h2>

     
      
         <div className="under-lines"></div>
         <div className="last">
             <div className="rupess">
                 <p>From</p>
                 <h1>890.00</h1>
             </div>
             <div className="yoo">
                 <h2 >expolre</h2>
             </div>


         </div>

     </div>
        </div>

      </div>
    </section>
  );
};

export default Ourtours;
