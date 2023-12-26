import { useCounter } from "../../context/CounterContext"
import './Counter.css'
const Counter = () => {
    const {count , increaseCount, decreaseCount} = useCounter()
  return (
    <div className='Counter'>
        <button onClick={increaseCount}>+</button>
        <h2>Counter {count}</h2>
        <button onClick={decreaseCount}>-</button>
    </div>
  )
}

export default Counter