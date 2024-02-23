import React from 'react'

import './Imagesection.css'
import images from '../Assets.md/pexels-pixabay-532381.jpg'

const Imagesection = () => {
  return (
   <section className='image-section-main'>
    <div className='image-section-container'>
        <div className='imgs'>
        <img src={images} alt=''/>
       

        </div>
   

    </div>

   </section>
  )
}

export default Imagesection