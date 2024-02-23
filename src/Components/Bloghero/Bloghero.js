import React from 'react'
import './Bloghero.css'
import { LiaGreaterThanSolid } from "react-icons/lia";

const Bloghero = () => {
  return (
    <section className='blog-hero-main'>
        <div className='opacity-color'>

        </div>
       
            <div className='blog-content'>
                <div className='blog-button'>
                    <button>Blogs <LiaGreaterThanSolid style={{height:"10px ", width:"10px", color:" #d9ed82", fontWeight:"500" }} /> About</button>

                </div>
                <div className='blog-heading'>
                    <h1>Blogs</h1>

                </div>
              

            </div>

      

    </section>
  )
}

export default Bloghero