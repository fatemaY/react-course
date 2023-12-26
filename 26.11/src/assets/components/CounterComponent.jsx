import React from 'react'
import {useState} from 'react'
import './style.css'


export default function CounterComponent() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => {
        if (counter < 10) {
          setCounter(counter + 1);
        }
      };
    const decrementCounter = () => {
        if (counter > -10) {
          setCounter(counter - 1);
        }
      };
    const labelColor =
      counter < 0 ? 'red' : counter > 0 ? 'green' : 'black';

  return (
    <div>
       <button className='bottun' onClick={incrementCounter}>Increment</button>
       <button className='bottun' onClick={decrementCounter}>Decrement</button>
       <label style={{ color: labelColor }}>{counter}</label>
    </div>
 )
}
