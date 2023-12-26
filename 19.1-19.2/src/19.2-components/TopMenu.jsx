import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext ';
import '..//App.css'

const TopMenu = () => {
    const { toggleTheme, isNightMode } = useContext(ThemeContext);

    return (
      <div className={`top-menu ${isNightMode ? 'night-mode' : 'day-mode'}`}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div>
          <h2>Top Menu</h2>
        </div>
      </div>
    );
  };
export default TopMenu

 
