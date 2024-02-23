import React from 'react'
import './Yellow.css'
import { IoLocationSharp } from "react-icons/io5";



const Yellow = () => {
  return (
    <section className='yellow-main'>
        <div className='yellow-container'>
            <div className='yellow-box-main'>
                <div className='yellow-single-1'>
                    <div className='yellow-icon'>
                        <h1><IoLocationSharp /></h1>
                    </div>
                    <div className='yellow-heading'>
                        <p>Enjoy Some Flexibility</p>
                    </div>
                    <div className='yellow-para'>
                        <p>Stays-with flexible cacalletion<br/>
                        make it easy to re-book if your<br/>
                        plans change</p>

                    </div>

                </div>
                <div className='yellow-single-2'>
                    <div className='yellow-icon-2'>
                    <h1><IoLocationSharp /></h1>
                    </div>
                    <div className='yellow-heading-2'>
                        <p>More than 7m Active <br/>Trip</p>
                       
                    </div>
                    <div className='yellow-para-2'>
                        <p>morethan 1 billon ustes who we are<br/>
                        found gateways in over 120<br/>
                        countries and destinations</p>

                    </div>

                </div>
                <div className='yellow-single-3'>
                    <div className='yellow-icon-3'>
                    <h1><IoLocationSharp /></h1>
                    </div>
                    <div className='yellow-heading-3'>
                        <p>100+ filters for tailored <br/>stays</p>
                        
                    </div>
                    <div className='yellow-para-3'>
                        <p>pick your price range the number<br/>
                        of rooms you want and other key<br/>
                        anenties ti find the stay that fits<br/>
                        your needs</p>

                    </div>

                </div>

            </div>


        </div>


    </section>
  )
}

export default Yellow