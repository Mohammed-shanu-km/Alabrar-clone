import React from 'react'
import './Tourhero.css'
import { LiaGreaterThanSolid } from "react-icons/lia";

const Abouthero = () => {
  return (
    <section className='tour-hero-main'>
        <div className='opacity-color'>

        </div>
       
            <div className='tour-content'>
                <div className='tour-button'>
                    <button>  Home <LiaGreaterThanSolid style={{height:"10px ", width:"10px", color:" #d9ed82", fontWeight:"500" }} />  Tour</button>

                </div>
                <div className='tour-heading'>
                    <h1>Tour List</h1>

                </div>
              

            </div>

      

    </section>
  )
}

export default Abouthero