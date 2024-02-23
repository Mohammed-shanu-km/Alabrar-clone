import React from 'react'
import './Contactfirst.css'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa";

const Contactfirst = () => {
  return (
    <section className='contacts-first-main'>
        <div className='contacts-container'>
            <div className='contacts-content'>
                <h2>Contact Us</h2>
                <h1>Get In Touch With Al-Abrar</h1>
                <p>Need assistance or have something to share? Contact us – your gateway<br/>
                to seamless communication. We're just a message away.</p>

            </div>
            <div className='contacts-boxes'>
                <div className='contact-single-box-1'>
                <FaLocationDot className='ht' />
                <h2>Our Location</h2>
                <p>1st Floor,Mangarathodi Center, Down Hill, Malappuram, Kerala - 676519</p>



                </div>
                <div className='contact-single-box'>
                <IoIosContact  className='ht' />
                <h2>Contact us</h2>
                <p>7306940639</p>



                </div>
                <div className='contact-single-box-1'>
                <MdEmail  className='ht' />
                <h2>Email US</h2>
                <p>info@abrar.com</p>



                </div>
                <div className='contact-single-box'>
                <FaClock  className='ht' />
                <h2>Working home</h2>
                <p>Mon - Sat : 9.00 - 6.00</p>



                </div>
                 
            </div>

        </div>

    </section>
  )
}

export default Contactfirst