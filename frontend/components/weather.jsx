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

    this.getInfo = this.getInfo.bind(this);
  }

  getInfo(location) {
    let url = "http://api.openweathermap.org/data/2.5/weather?";
    url += 'APPID=' + APIKey.APIKey;
    url += `&lat=${location.coords.latitude}`;
    url += `&lon=${location.coords.longitude}`;

    axios.get(url).then(res => {
      this.setState( {location: res.data.name} );
      this.setState({temperature: res.data.main.temp});
    });
  }

  // Would usually hit a frontend route which will hit a backend route which will make the API request
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getInfo);
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