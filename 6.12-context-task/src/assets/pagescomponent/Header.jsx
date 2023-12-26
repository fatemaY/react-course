import React from 'react'
import { useTimer } from '../context/TimerContext';
import './header.css'

const Header = () => {
    const { timer } = useTimer();

  return (
       <nav className="header-container">
            <p>Timer Elapsed: {timer} seconds</p>
            <button id='theme'>dark/light</button>
            
    </nav>
  )
}

export default Header