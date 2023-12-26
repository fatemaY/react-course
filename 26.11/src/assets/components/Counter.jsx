import React from 'react'
import {useState} from 'react'


export default function Counter() {

const [count, setCount] = useState(0);
    function addOne(){
        setCount(count + 1)
     }

  return (
    <div>
    <button onClick={addOne}>Increment</button>
       {count}
    </div>
  )
}
