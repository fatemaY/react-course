import React from 'react'

const Author = ({author}) => {
  return (
    <ul>
      <li key={author.id}>
        <h3>{author.name}</h3>
        <p>{author.bio}</p>
      </li>
   </ul>
  )
}

export default Author