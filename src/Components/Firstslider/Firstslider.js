import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Firstslide.css'
import turkey from '../Assets.md/pexels-lifekor-13504670.jpg'
import paris from '../Assets.md/pexels-pixabay-64271.jpg'
import morroco from '../Assets.md/pexels-silvia-trigo-2675268.jpg'
import next from '../Assets.md/pexels-tomáš-malík-1703312.jpg'
import ath from '../Assets.md/pexels-yeş-7524272.jpg'



// import required modules
import { Pagination } from 'swiper/modules';

export default function Firstslider() {
  return (
    <>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={55}
        
        pagination={{
          clickable: true,
        }}
       breakpoints={{
        300:{
            slidesPerView:1.2,
            spaceBetween:20,
        },
        640:{
            slidesPerView:3.5,
            spaceBetween:20,
        }
       }}
        
        modules={[Pagination]}
    
        className="mySwiper"
      >
        <SwiperSlide className='swiperhover'><img src={ath} alt=''/>
        <div className='swiper-content'>
            <div className='swiper-content '>
                <h1>Winter Turkey</h1>

            </div>
            <div className='swiper-content-country'>
                <p>Turkey</p>

            </div>
            <div className='hero-btns'>
                    <button>
                        i want traval here
                    </button>

                </div>

        </div>
        </SwiperSlide>
        <SwiperSlide className='swiperhover'><img src={paris} alt=''/>
        <div className='swiper-content'>
            <div className='swiper-content '>
                <h1>Europe</h1>

            </div>
            <div className='swiper-content-country'>
                <p>Turkey</p>

            </div>
            <div className='hero-btns'>
                    <button>
                    i want traval here
                    </button>

                </div>

        </div>
        </SwiperSlide>
        <SwiperSlide className='swiperhover'><img src={morroco} alt=''/>
        <div className='swiper-content'>
            <div className='swiper-content '>
                <h1>Grand USA</h1>

            </div>
            <div className='swiper-content-country'>
                <p>Turkey</p>

            </div>
            <div className='hero-btns'>
                    <button>
                    i want traval here
                    </button>

                </div>

        </div>
        </SwiperSlide>
        <SwiperSlide className='swiperhover'><img src={next} alt=''/>
        <div className='swiper-content'>
            <div className='swiper-content '>
                <h1>Morooco</h1>

            </div>
            <div className='swiper-content-country'>
                <p>Turkey</p>

            </div>
            <div className='hero-btns'>
                    <button>
                    i want traval here
                    </button>

                </div>

        </div>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
}
