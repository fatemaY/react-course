import React from 'react';
import "./style.css"
import { useState } from 'react';


const LoginStatus = () => {
        const [isLoggedIn, setIsLoggedIn] = useState(false);
      
        const loginStatus = () => {
            setIsLoggedIn(!isLoggedIn);
        };
      
  return (
    // <div>
    //   {isLoggedIn ? (<p> Welcome! You are logged in.</p>) 
    //   : (<button onClick={loginStatus}> Login </button>
    //   )}
    // </div>
    <div>
     {isLoggedIn ? (<p> Welcome! You are logged in.</p>) : ''}
     <button onClick={loginStatus}> Login </button>
  </div>
  );
};

export default LoginStatus;
