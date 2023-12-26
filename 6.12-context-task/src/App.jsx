
import { useState } from 'react';
import './App.css'
import { TimerProvider } from './assets/context/TimerContext'
import Header from './assets/pagescomponent/Header';
import InfoPage from './assets/pagescomponent/InfoPage';
import { NavigationProvider } from './assets/context/NavigationContext';

function App() {

 
  
  return (
    <>
      <TimerProvider>
        <Header />
        <NavigationProvider>
          <InfoPage />
        </NavigationProvider>
         
  
      </TimerProvider>
    </>
  )
}

export default App
