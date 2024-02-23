import React from 'react'
import './Abouthero.css'
import { LiaGreaterThanSolid } from "react-icons/lia";

const Abouthero = () => {
  return (
    <section className='about-hero-main'>
        <div className='opacity-color'>

        </div>
       
            <div className='about-content'>
                <div className='about-button'>
                    <button>Home<LiaGreaterThanSolid className='arrow-btetween'/>About</button>

                </div>
                <div className='about-heading'>
                    <h1>About us</h1>

                </div>
              

            </div>

      

    </section>
  )
}

export default Abouthero