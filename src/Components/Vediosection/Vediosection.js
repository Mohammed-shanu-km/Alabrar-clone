import React from 'react'
import './Vediosection.css'
import { IoIosPeople } from "react-icons/io";
import { IoIosGlasses } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import img from '../Assets.md/pexels-silvia-trigo-2675268.jpg'

const Vediosection = () => {
  return (
    <section className='vedio-section-main'>
        <div className='opu'>
            <div className='vedio-section-container'>
                <div className='vedio-section-content'>
                    <h2>Best Travel Agency</h2>
                    <h1>We are Professional Planners for Your Vacations</h1>
                    <p>Discover unparalleled expertise with our travel agency, crafting dream vacations for countless happy<br/> travelers.</p>

                </div>
                <div className='vedio-icon-section'>
                    <div className='first'>
                        <div className='ic'>
                        <IoIosPeople style={{height:"80px", width:"80px", color:"#d9ed82", marginLeft:"10px"}} />



                        </div>
                        <h1>200K<span style={{color:"#d9ed82"}}>+</span></h1>
                        <p className='oo'>Travallers</p>

                    </div>
                    <div className='first'>
                        <div className='ic'>
                        <IoIosPeople style={{height:"80px", width:"80px", color:"#d9ed82", marginLeft:"10px"}} />
                        


                        </div>
                        <h1>200K<span  style={{color:"#d9ed82"}}>+</span></h1>
                        <p className='oo'>Travallers</p>

                    </div>
                    <div className='first'>
                        <div className='ic'>
                        <IoIosPeople style={{height:"80px", width:"80px", color:"#d9ed82", marginLeft:"10px"}} />


                        </div>
                        <h1>200K<span  style={{color:"#d9ed82"}}>+</span></h1>
                        <p className='oo'>Travallers</p>

                    </div>

                </div>
               

            </div>

        </div>

    </section>
  )
}

export default Vediosection