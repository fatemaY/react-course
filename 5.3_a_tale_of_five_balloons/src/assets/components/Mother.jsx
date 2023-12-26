import React from 'react'
import Child from './Child';
import "./style.css"


export default function Mother() {
    const kids = [
        { name: 'Ori', color: 'red' },
        { name: 'Ron', color: 'blue' },
        { name: 'Sigalit', color: 'green' },
        { name: 'Ruti', color: 'yellow' },
        { name: 'Alon', color: 'purple' },
    ];
    
    return (
        <div>
          <h1>A Tale Of Five Balloons</h1>
          <div className='child-container'>
          {kids.map((kid, index) => (
            <Child key={index} name={kid.name} color={kid.color} />
          ))}
          </div>
        </div>
    );
}
