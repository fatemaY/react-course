import React from 'react'
import './card.css'

export default function Card ({ image, title, description, link }){
    return (
      <div className='cardContainer'>
        <img id= "img" src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='link'>
            <a href={link.url} >
              {link.text}
            </a>
        </div>
      </div>
    );
  }