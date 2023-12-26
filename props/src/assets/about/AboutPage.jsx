import React from 'react'
import Author from './Author'

const AboutPage = ({aboutData}) => {
   const authors=[
        { id: 1, name: "John Doe", bio: "Web Developer" },
        { id: 2, name: "Jane Doe", bio: "UI/UX Designer" },
    ]
        
    console.log(authors)
  return (
    <div>
         <h1>About Us</h1>

{/* Display information about the blog */}
{aboutData.map((item) => (
  <div key={item.id}>
    <h2>{item.title}</h2>
    <p>{item.description}</p>
    <img src={item.imageUrl} alt={item.title} />
    </div>
  ))}
    <h2>Authors</h2>
    {authors.map((author) => (
      <Author key={author.id} author={author} />
    ))}
     
       
    </div>
  )
}

export default AboutPage