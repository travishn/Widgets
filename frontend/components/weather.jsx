import React from 'react';
import axios from 'axios';
const APIKey = require('../../CLIENT_SECRET');

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      temperature: ''
    };
  }

  // Would usually hit a frontend route which will hit a backend route which will make the API request
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
      let url = "http://api.openweathermap.org/data/2.5/weather?";
      url += APIKey.APIKey;
      url += `&lon=${position.coords.longitude}`;
      url += `&lat=${position.coords.latitude}`;
      debugger;

      axios.get(url).then( res => {
        this.setState({temperature: res.main.temp});
        this.setState({location: res.name});
      });
    });
  }



  render() {
    return (
      <section>
        {this.state.location}
        {this.state.temperature}
      </section>
    );
  }
}

export default Weather;