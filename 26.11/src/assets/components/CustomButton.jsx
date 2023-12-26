import React from 'react'
import './style.css'


export default function CustomButton({ color, onClick }) {
  return (
    <button className= "button" style={{ backgroundColor: color }} onClick={() => onClick(color)}>
      {color}
    </button>
  )
}
