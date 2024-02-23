import React from 'react'
import './Review.css'
import Reviewslider from '../Reviewslider/Reviewslider'
import person from "../Assets.md/pexels-italo-melo-2379004 (1).jpg";

function Review() {
  return (
   <section className='review-main'>
    <div className='reviw-container'>
        <div>

        
        <Reviewslider/>
        </div>
        <div className='each-person'>
            <div className='photos'>
            <img src={person} alt=''/>
            <div className='name'>
                <p>shanu</p>

            </div>
            </div>
           
            <div className='photos'>
            <img src={person} alt=''/>
            <div className='name'>
                <p>shanu</p>

            </div>
            

            </div>
            <div className='photos'>
            <img src={person} alt=''/>
            <div className='name'>
                <p>shanu</p>

            </div>
            </div>
           
           

        </div>
       
    </div>
   
   

   </section>
  )
}

export default Review