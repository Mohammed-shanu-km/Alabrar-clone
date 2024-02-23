import React from 'react'
import './Contactmap.css'

const Contactmap = () => {
  return (
    <section className='contact-map-main'>
        <div className='contact-map-container'>
            <div className='map-main'>
                <div className='map'>
                <iframe className='ifuu'
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251482.45724933132!2d76.1361189059796!3d9.982669696156243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1706681641261!5m2!1sen!2sin"
        width="600"
        height="500"
        style={{  }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

                </div>
                <div className='form'>
                    <form>
                    <div class="input-group">
                            <input type="text" id="name" placeholder='name' required/>
                           
                            <input type="text" id="name" placeholder='age' required/>
                           
                            <input type="text" id="name" placeholder='adress' required/>
                            
                            <input  type="text" id="messege" placeholder='messege' required/>
                            
                        </div>
                        <div className='form-btn'>
                            <button>Send messege</button>
                        </div>
                       
                           
                        

                    </form>
               

                </div>

            </div>

        </div>

    </section>
  )
}

export default Contactmap