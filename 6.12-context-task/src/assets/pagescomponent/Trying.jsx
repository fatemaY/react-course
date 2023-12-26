import React from 'react'
import { useTimer } from '../context/TimerContext';

const Trying = () => {
    const { timer } = useTimer();

  return <div>Timer: {timer} seconds</div>;
}

export default Trying