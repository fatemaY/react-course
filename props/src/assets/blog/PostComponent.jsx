import React from 'react'

const PostComponent = ({post},{image}) => {
  return (
    <div>
    <h2>{post.title}</h2>
    <p>Author: {post.author}</p>
    <p>Date: {post.date}</p>
    <p>{post.content}</p>
    <img src={image.src} alt={`Image ${image.id}`} style={{ width: '150px', margin: '10px' }} />

  </div>
  )
}

export default PostComponent