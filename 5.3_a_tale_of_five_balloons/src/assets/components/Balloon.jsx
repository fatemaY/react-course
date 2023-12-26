import React from 'react'
import "./style.css"

export default function Balloon({ color }) {
  const balloonStyle = {
    backgroundColor: color,
    width: '50px',  // Adjust width as needed
    height: '50px', // Adjust height as needed
    borderRadius: '50%',
  };

  return <div className='balloon' style={balloonStyle}></div>;
}