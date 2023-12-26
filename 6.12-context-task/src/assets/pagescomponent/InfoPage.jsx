import React from 'react'
import { useNavigation } from '../context/NavigationContext';

const InfoPage = () => {
    const { setCurrentPage } = useNavigation();


  return (
    <div>
      <h1>Info Page</h1>
      <p>Student Information: Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, laudantium.</p>
      <button onClick={() => setCurrentPage('animal')}>Go to Animal Page</button>
    </div>
  )
}

export default InfoPage