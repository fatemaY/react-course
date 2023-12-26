import React from 'react'
import { useRef } from 'react';
import './style.css'
import Blackimg from "../imges/black-white-color1.jpg"
import Colorimg from "../imges/color-img1.jpg"



export default function Image() {

  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    if (imageRef.current) {
      imageRef.current.src = Colorimg;
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.src = Blackimg;
    }
  };


  return (
    <img
    className="image-toggle" // Add your class name for styling
    ref={imageRef}
    src={Blackimg}
    alt="Image"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    />
  )
}
