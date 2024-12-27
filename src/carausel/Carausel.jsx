import React, { useState } from 'react'
import "./Carausel.css";


const Carausel = () => {
   var slides=document.querySelectorAll(".slide");
   var [counter,setCounter]=useState(0);

    slides.forEach((curElem,index)=>{
        curElem.style.left=`${index*100}%`
    })

    const slideImage=()=>{
        slides.forEach((slide)=>{
            
            slide.style.transform=`translateX(-${counter*100}%)`
        })
    }
    const goNext=()=>{
        setCounter(counter+1)
        slideImage();
            }
    const goPrev=()=>{
setCounter(counter-1);
slideImage();
    }
  

  
  return (
    <div>
        <main>
            <img src="https://picsum.photos/id/237/200/300" alt="" className="slide"/>
            <img src="https://picsum.photos/id/238/200/300" alt="" className="slide"/>
            <img src="https://picsum.photos/id/239/200/300" alt="" className="slide"/>
            <img src="https://picsum.photos/id/240/200/300" alt="" className="slide"/>
        </main>
        <div className='nav'>
            <button onClick={goPrev}>Prev</button>
            <button onClick={goNext}>Next</button>
        </div>
    </div>
  )
}

export default Carausel