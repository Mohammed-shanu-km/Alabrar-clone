import React, { useState } from 'react'
import './Quiz.css'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";


const Quiz = ({title,info}) => {
    const [showinfo,setshowinfo]=useState(false)
  return (
    <article>
        <header>
            <div className='oneis'>

           
            <h4>{title}</h4>
            <button className='btn' onClick={()=>setshowinfo(!showinfo)}>
                {showinfo ? <CiCircleMinus  className='fay'/>:<CiCirclePlus className='fay' />}

            </button>
            </div>
        </header>
        {showinfo && <p>{info}</p>}

    </article>
  )
}

export default Quiz


