import React from 'react'
import './Ourteamsection.css'
import per from '../Assets.md/pexels-italo-melo-2379004 (1).jpg'

const Ourteamsection = () => {
  return (
   <section className='team-section-main'>
    <div className='team-section-container'>
        <div className='team-content'>
            <h2>Our Team</h2>
            <h1>Meet Our Professional Team</h1>
            <p>Meet our professional team crafting seamless journeys. Dedicated experts<br/>
            ensuring your perfect adventure with passion and precision.</p>

        </div>
        <div className='image-box1'>
            <div  className='box1-image'>
                <img src={per} alt=''/>

              
                <div className='white-content-1'>
                    <h1>mishal</h1>
                    <p>Accountant</p>

                </div>  

            </div>
           
            <div  className='box1-image'>
                <img src={per} alt=''/>
                <div className='white-content-1'>
                <h1>mishal</h1>
                    <p>Accountant</p>

            </div>      

            </div>
           
            <div  className='box1-image'>
                <img src={per} alt=''/>
                <div className='white-content-1'>
                <h1>mishal</h1>
                    <p>Accountant</p>

                </div>

            </div>
           
            

        </div>
        <div className='image-box2'>
            <div  className='box1-image'>
                <img src={per} alt=''/>
                <div className='white-content-1'>
                <h1>mishal</h1>
                    <p>Accountant</p>

            </div>

            </div>
            
            <div  className='box1-image'>
                <img src={per} alt=''/>
                <div className='white-content-1'>
                <h1>mishal</h1>
                    <p>Accountant</p>

            </div>

            </div>
           
            <div  className='box1-image'>
                <img src={per} alt=''/>
                <div className='white-content-1'>
                <h1>mishal</h1>
                    <p>Accountant</p>

            </div>

            </div>
            
            

        </div>
       
       

    </div>

   </section>
  )
}

export default Ourteamsection