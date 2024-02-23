import React from 'react'
import './Advanture.css'
import adva from '../Assets.md/pexels-silvia-trigo-2675268.jpg'

const Advanture = () => {
  return (
    <section className='adv-main'>
        <div className='adv-container'>
            <div className='main-section'>
                <div className='left-section'>
                    <div className='left-heading'>
                    <h1>Craft Your Advanture:<br/>Trailer Made Travel<br/>Experiance Just for you</h1>

                    </div>
                    <div className='left-para'>
                        <p>Tailor your travel experience by selecting from a variety of<br/>
                        personalized packages, ensuring every aspect of your journey<br/>
                        suits your preferences.</p>

                    </div>
                    <div className='left-btn'>
                        <button>Explore now</button>

                    </div>
                   

                </div>
                <div className='right section'>
                    <div className='right-image'>
                        <img src={adva} alt=''/>

                    </div>

                </div>

            </div>


        </div>

    </section>
  )
}

export default Advanture