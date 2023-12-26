import React from 'react'
import {useState} from 'react'
import './style.css'

export default function Box() {
    const [isBoxVisible, setBoxVisibility] = useState(true);
    const toggleBoxVisibility = () => {
        setBoxVisibility(!isBoxVisible);
      };

  return (
    <div className='container'>
      <button className='button' onClick={toggleBoxVisibility}>
        {isBoxVisible ? 'Hide Box' : 'Show Box'}
      </button>
       {isBoxVisible && <div className="box"></div>}
      </div>
  )
}
