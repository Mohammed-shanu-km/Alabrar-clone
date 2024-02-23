import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Reviewslider.css";

import { LiaStarSolid } from "react-icons/lia";
import { FaRegCircle } from "react-icons/fa";
import rev from "../Assets.md/pexels-italo-melo-2379004 (1).jpg";

// import required modules
import { Pagination } from "swiper/modules";

export default function Reviewslider() {
  return (
    <>
      <Swiper
        pagination={false}
        modules={[Pagination]}
        className="mySwiper"
        spaceBetween={100}
      >
        <SwiperSlide>
          <div className="slides-main">
            <div className="left-section">
              <div className="left-content">
                <div className="h1">
                  <h1>
                    What ever happy client
                    <br />
                    says
                  </h1>
                </div>
                <div className="p1">
                  <p>
                    jhone de native of the resion she wac a hower horecalf
                    before she
                    <br />
                    starting offering her service to other people so she knows
                    about the
                    <br />
                    neccery to have sone to take care of all the little things
                  </p>
                </div>
                <div className="icons-review">
                  <LiaStarSolid className="stars" />
                  <LiaStarSolid className="stars" />
                  <LiaStarSolid className="stars" />
                  <LiaStarSolid className="stars" />
                  <LiaStarSolid className="stars" />
                  <div className="rating">
                    <p>5/5</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section">
              <div className="right-imagess">
                <img src={rev} alt="" />
                <div className="round-div">
                  <FaRegCircle className="round" />
                </div>
              </div>
            </div>
           
           
          </div>
          
        
          
        </SwiperSlide>
       
        <SwiperSlide>
          <div className="slides-main">
            <div className="left-section">
              <div className="left-content">
                <div className="h1">
                  <h1>
                    What ever happy client
                    <br />
                    says
                  </h1>
                </div>
                <div className="p1">
                  <p>
                    jhone de native of the resion she wac a hower horecalf
                    before she
                    <br />
                    starting offering her service to other people so she knows
                    about the
                    <br />
                    neccery to have sone to take care of all the little things
                  </p>
                </div>
                <div className="icons-review">
                  <LiaStarSolid className="stars" />
                  <LiaStarSolid className="stars" />
                  <LiaStarSolid className="stars" />
                  <LiaStarSolid className="stars" />
                  <LiaStarSolid className="stars" />
                  <div className="rating">
                    <p>5/5</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section">
              <div className="right-imagess">
                <img src={rev} alt="" />
                <div className="round-div">
                  <FaRegCircle className="round" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slides-main">
            <div className="left-section">
              <div className="left-content">
                <div className="h1">
                  <h1>
                    What ever happy client
                    <br />
                    says
                  </h1>
                </div>
                <div className="p1">
                  <p>
                    jhone de native of the resion she wac a hower horecalf
                    before she
                    <br />
                    starting offering her service to other people so she knows
                    about the
                    <br />
                    neccery to have sone to take care of all the little things
                  </p>
                </div>
                <div className="icons-review">
                  <LiaStarSolid className="stars" />
                  <LiaStarSolid className="stars" />
                  <LiaStarSolid className="stars" />
                  <LiaStarSolid className="stars" />
                  <LiaStarSolid className="stars" />
                  <div className="rating">
                    <p>5/5</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section">
              <div className="right-imagess">
                <img src={rev} alt="" />
                <div className="round-div">
                  <FaRegCircle className="round" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slides-main">
            <div className="left-section">
              <div className="left-content">
                <div className="h1">
                  <h1>
                    What ever happy client
                    <br />
                    says
                  </h1>
                </div>
                <div className="p1">
                  <p>
                    jhone de native of the resion she wac a hower horecalf
                    before she
                    <br />
                    starting offering her service to other people so she knows
                    about the
                    <br />
                    neccery to have sone to take care of all the little things
                  </p>
                </div>
                <div className="icons-review">
                  <LiaStarSolid className="stars" />
                  <LiaStarSolid className="stars" />
                  <LiaStarSolid className="stars" />
                  <LiaStarSolid className="stars" />
                  <LiaStarSolid className="stars" />
                  <div className="rating">
                    <p>5/5</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section">
              <div className="right-imagess">
                <img src={rev} alt="" />
                <div className="round-div">
                  <FaRegCircle className="round" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
     
    </>
  );
}
