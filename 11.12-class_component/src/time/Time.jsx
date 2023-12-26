import React, { Component } from 'react';
import "./time.css"
class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
  }

  handleSecondsChange = (event) => {
    const inputValue = event.target.value;
    this.setState({
      seconds: inputValue,
      minutes: inputValue / 60,
      hours: inputValue / 3600,
    });
  };

  handleMinutesChange = (event) => {
    const inputValue = event.target.value;
    this.setState({
      seconds: inputValue * 60,
      minutes: inputValue,
      hours: inputValue / 60,
    });
  };

  handleHoursChange = (event) => {
    const inputValue = event.target.value;
    this.setState({
      seconds: inputValue * 3600,
      minutes: inputValue * 60,
      hours: inputValue,
    });
  };

  render() {
    const { seconds, minutes, hours } = this.state;

    return (
      <div className='time'>
        <h3>20.3_whats_the_time</h3>
        <label>
          Seconds:
          <input type="number" value={seconds} onChange={this.handleSecondsChange} />
        </label>

        <label>
          Minutes:
          <input type="number" value={minutes} onChange={this.handleMinutesChange} />
        </label>

        <label>
          Hours:
          <input type="number" value={hours} onChange={this.handleHoursChange} />
        </label>
      </div>
    );
  }
}

export default Time;
