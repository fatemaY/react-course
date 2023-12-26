import React from 'react'
import { useRef } from 'react';
import './style.css'
export default function Video() {
//  var VIDEO = {
//      cat: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4'}
const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
    } 
    else {
      video.pause();
    }
  };  

return (
    <div className='video-container'>
     <h1>React Video Player</h1>
     <video ref={videoRef} width="640" height="360" controls>
      <source src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4" type="video/mp4" />
      {/* <source src="https://player.vimeo.com/video/383991325" type="video/mp4" /> */}
     </video>
     <button className='start' onClick={handlePlayPause}> Play/Pause </button>
    </div>
  )
}
