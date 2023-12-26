import React from 'react'
import PostComponent from './PostComponent';

const BlogComponent = ({blogData}, {image}) => {

console.log(blogData)
  return (
    <div>
    <h1>Blog Posts</h1>
    {blogData.map((post,index) => (
      <PostComponent key={index} post={post} image={image}/>
    ))}
  </div>
  );
}

export default BlogComponent