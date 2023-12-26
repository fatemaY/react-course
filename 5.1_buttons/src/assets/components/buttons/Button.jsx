import React from 'react'
import './style.css'

export default function  Button ({ text, isImportant }) {
    const buttonStyle = {
      fontWeight: isImportant ? 'bold' : 'normal',
      
    };
  
    return (
      <button style={buttonStyle}>
        {text}
      </button>
    );
  };



  // return (
  //   <div>
  //     <button className= 'button1' text="Important" isImportant={true}>Important</button>
  //       {/* <button className='button1'> Important </button> */}
  //       <Button2 />

  //   </div>
  // )

