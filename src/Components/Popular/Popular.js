import React, { useState } from 'react'
import './Popular.css'
import quizdata from '../Datas/Data'
import Quiz from '../Quiz/Quiz'
import popular from '../Assets.md/pexels-jacek-mleczek-1123199.jpg'

const Popular = () => {
    const[Data,setData]=useState(quizdata)
    console.log(Data);
  return (
   <section className='popular-main'>
    <div className='popular-container'>
        <div className='popular'>
            <div className='popular-left'>
                <div className='popular-content'>
                    <h2>FAQ</h2>
                    <h1>Popular Question</h1>
                    <p>Navigate our FAQs for quick answers. From bookings to destinations, find insights for<br/>
                    a seamless journey. Reach out for more.</p>

                </div>
                <div className='quiz-main'>
                    {
                        Data.map((item)=>(

                            <Quiz key={item.id} {...item}/>

                        ))
                    }
                  

                </div>

            </div>
            <div className='popular-right'>
                <img src={popular} alt=''/>
               

            </div>

        </div>

    </div>

   </section>
  )
}

export default Popular