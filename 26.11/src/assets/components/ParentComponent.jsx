import React from 'react'
import {useState} from 'react'
import CustomButton from './CustomButton';

export default function ParentComponent() {
    const colors = ['blue', 'red', 'yellow'];
    const [selectedColor, setSelectedColor] = useState(null);
    const handleButtonClick = (color) => {
        setSelectedColor(color);
    };


  return (
    <div>
      <h1>Selected Color: {selectedColor}</h1>
      {colors.map((color, index) => (
        <CustomButton key={index} color={color} onClick={handleButtonClick} />
      ))}
    </div>
  )
}
