import React from 'react'
import './Contacthero.css'
import { LiaGreaterThanSolid } from "react-icons/lia";

const Abouthero = () => {
  return (
    <section className='contact-hero-main'>
        <div className='opacity-color'>

        </div>
       
            <div className='contact-content'>
                <div className='contact-button'>
                    <button>Home <LiaGreaterThanSolid style={{height:"10px ", width:"10px", color:" #d9ed82", fontWeight:"500" }} /> Contact us</button>

                </div>
                <div className='contact-heading'>
                    <h1>Contact Us</h1>

                </div>
              

            </div>

      

    </section>
  )
}

export default Abouthero