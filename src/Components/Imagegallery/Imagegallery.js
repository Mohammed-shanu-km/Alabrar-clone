import React from 'react'
import './Imagegallery.css'
import firstimage from '../Assets.md/pexels-haley-black-2087391.jpg'
import secondimage from '../Assets.md/pexels-jacek-mleczek-1123199.jpg'
import thirdimage from '../Assets.md/pexels-tim-gouw-186452.jpg'
import forthimage from '../Assets.md/pexels-thisisengineering-3862389.jpg'

const Imagegallery = () => {
  return (
    <section className='image-gallery-main'>
        <div className='image-gallery-container'>
            <div className='image-galu'>

           

      
        <div className='images'>
            <img src={firstimage} alt=''/>

        </div>
        <div className='images'>
            <img src={secondimage} alt=''/>

        </div>
        <div className='images'>
            <img src={thirdimage} alt=''/>

        </div>
        <div className='images'>
            <img src={forthimage} alt=''/>

        </div>
        </div>
        </div>

    </section>
  )
}

export default Imagegallery