import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.time = new Date();
    this.days = {
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
      7: 'Sunday'
    };
    
    this.state = {
      hours: this.time.getHours(),
      minutes: this.time.getMinutes(),
      seconds: this.time.getSeconds(),
      day: this.time.getDay(),
      month: this.time.getMonth(),
      year: this.time.getFullYear()
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    window.setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({seconds: this.state.seconds += 1});

    if (this.state.seconds === 60) {
      this.setState({seconds: 0});
      this.setState({minutes: this.state.minutes += 1});
    }

    if (this.state.minutes === 60) {
      this.setState({minutes: 0});
      this.setState({hours: this.state.hours += 1});
    }

    if (this.state.hours === 0) {
      this.setState({hours: 0});
    }

  }

  render() {
    return (
      <div>
        <h1>Ze Clock</h1>
        <p>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</p>
      </div>
    );
  }
}

export default Clock;