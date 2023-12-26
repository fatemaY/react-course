import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const data = ["hello", "world"];

 function Write () {
    const jsxOutput = data.map((word, index) => (
      <React.Fragment key={index}>
        {index > 0 && ' '}
        {word.charAt(0).toUpperCase() + word.slice(1)}
      </React.Fragment>
    ));
    return <div>{jsxOutput}</div>;

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Write />
  </React.StrictMode>,
)
