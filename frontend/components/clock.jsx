import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.time = new Date();
    this.state = {
      hours: this.time.getHours(),
      minutes: this.time.getMinutes(),
      seconds: this.time.getSeconds()
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