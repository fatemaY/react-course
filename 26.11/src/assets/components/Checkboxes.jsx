import React from 'react'
import Checkbox from './Checkbox.jsx'
import {useState} from 'react'
import './style.css'


export default function Checkboxes() {
  const [checkboxes, setCheckboxes] = useState([false, false,true, true]);
  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
  };


  return (
    <div className='checkbox'>
      <Checkbox
        label="I read The term of the App"
        checked={checkboxes[0]}
        onChange={() => handleCheckboxChange(0)}
      />
      <Checkbox
        label="I read The term of the App"
        checked={checkboxes[1]}
        onChange={() => handleCheckboxChange(1)}
      />
      <Checkbox
        label="I read The term of the App"
        checked={checkboxes[2]}
        onChange={() => handleCheckboxChange(2)}
      />
      <Checkbox
        label="I read The term of the App"
        checked={checkboxes[3]}
        onChange={() => handleCheckboxChange(3)}
      />
    </div>
    
  )
}
