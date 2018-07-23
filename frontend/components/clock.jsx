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

    this.months= {
      1: { name: 'Jan', max_day: 31 },
      2: { name: 'Feb', max_day: 28 },
      3: { name: 'Mar', max_day: 31 },
      4: { name: 'Apr', max_day: 30 },
      5: { name: 'May', max_day: 31 },
      6: { name: 'Jun', max_day: 30 },
      7: { name: 'Jul', max_day: 31 },
      8: { name: 'Aug', max_day: 31 },
      9: { name: 'Sep', max_day: 30 },
      10: { name: 'Oct', max_day: 31 },
      11: { name: 'Nov', max_day: 30 },
      12: { name: 'Dec', max_day: 31 }
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

    if (this.state.hours === 24) {
      this.setState({hours: 0});
      this.setState({day: this.state.day += 1});
    }

    if (this.state.day === this.months[this.state.month].max_day + 1) {
      this.setState({day: 1});
      this.setState({month: this.state.month += 1 });
    }

    if (this.state.month === 13) {
      this.setState({month: 1});
      this.setState({year: this.state.year += 1});
    }
  }

  render() {
    const hour = (this.state.hours % 10) === this.state.hours ? ('0' + this.state.hours) : this.state.hours;
    const minute = (this.state.minutes % 10) === this.state.minutes ? ('0' + this.state.minutes) : (this.state.minutes.toString());
    const second = (this.state.seconds % 10) === this.state.seconds ? ('0' + this.state.seconds) : (this.state.seconds.toString());

    return (
      <section>
        <h2>Clock</h2>
        <div className="clock-container">
          <div className="clock">
            <h5>Time: </h5>
            <p>{hour}:{minute}:{second} PDT</p>
          </div>

          <div className="clock">
            <h5>Date:</h5>
            <p>{this.days[this.state.day]} {this.months[this.state.month].name}  {this.state.day}, {this.state.year}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Clock;