
import React, { Component } from 'react';
import './box.css';

class Box extends Component {

    constructor(props) {
        super(props);
        this.boxRef = React.createRef();
      }
    
      componentDidMount() {
        const box = this.boxRef.current;

    // Slide in after 1 second
    setTimeout(() => {
      box.classList.add('slide-in');
    }, 1000);

    // Disappear from the DOM after 4 seconds
    setTimeout(() => {
      box.classList.add('disappear');
    }, 4000);
  }

  render() {
    return <div ref={this.boxRef} className={`animated-box ${this.props.size}`}></div>;
  }
}

export default Box;
