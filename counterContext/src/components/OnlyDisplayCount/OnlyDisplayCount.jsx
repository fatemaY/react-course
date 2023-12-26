import { useCounter } from '../../context/CounterContext'
import './OnlyDisplayCount.css'

const OnlyDisplayCount = () => {
    const {count} = useCounter()
  return (
    <div className='OnlyDisplayCount'>
        <p>Only Display Component</p>
        <h3>This is the current count: {count}</h3>
    </div>
  )
}

export default OnlyDisplayCount