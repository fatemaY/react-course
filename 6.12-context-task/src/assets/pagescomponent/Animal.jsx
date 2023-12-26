import React from 'react'

const Animal = () => {
    const { setCurrentPage } = useNavigation();

  return (
    <div>
       <h1>Animal Page</h1>
       <p>Favorite Animal Picture and Description</p>
       <button onClick={() => setCurrentPage('contact')}>Go to Contact Page</button>
    </div>
  )
}

export default Animal