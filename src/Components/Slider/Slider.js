import React from 'react'
import './Slider.css'
import { SlArrowRightCircle } from "react-icons/sl";
import { SlArrowLeftCircle } from "react-icons/sl";
import Firstslider from '../Firstslider/Firstslider';
const Slider = () => {
  return (
   <section className='slider-main'>
    <div className='silder-container'>
        <div className='slider-arrow'>
            <div className='slider-content'>
                <div className='slide-para'>
                <p>WHERE TO GO</p>
                </div>
                <div className='slider-head'>
                    <h1>Upcoming destinations</h1>

                </div>
               
               

            </div>
            <div className='slider-icon'>
            
            <SlArrowLeftCircle className='icons' />
            <SlArrowRightCircle className='icons' />



            </div>

        </div>

    </div>
    <div className='slider-section-container'>
        <Firstslider/>

    </div>

   </section>
  )
}

export default Slider