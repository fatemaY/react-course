import React from 'react'
// import ChildComponentA from './ChildComponentA'
// import ChildComponentB from './ChildComponentB'
// import PropsComponent from './PropsComponent'
// import BlogComponent from './blog/BlogComponent'
import ParentBlogComponent from '../blog/ParentBlogComponent';

 const ParentComponent = () => {
  const blogData = [
    {
    title: 'Exploring React Hooks',
    author: 'John Doe',
    date: '2023-05-15',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    tags: ['React', 'Hooks', 'Frontend'],
    },
    {
    title: 'The Power of GraphQL',
    author: 'Jane Smith',
    date: '2023-05-10',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
    tags: ['GraphQL', 'API', 'Backend'],
    },
    {
    title: 'Building Responsive UIs with Flexbox',
    author: 'Alice Johnson',
    date: '2023-04-28',
    content: 'Flexbox is a powerful layout system that makes building responsive...',
    tags: ['CSS', 'Flexbox', 'Responsive Design'],
    },
    // Add more blog posts with additional details
    // ...
    ];
   
    let index =0;
  return (
    <>
    {/* <div> Hii, I'm The ParentComponent</div>
    <PropsComponent />
    <ChildComponentA num={++index} />
    <ChildComponentB num={++index}/> */}
    <ParentBlogComponent blogPosts={blogData} />
   
    </>
    
  )
}
export default ParentComponent;
