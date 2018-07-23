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
    let newLocation = '';
    let newTemp = '';
    
    navigator.geolocation.getCurrentPosition(function (position) {
      let url = "http://api.openweathermap.org/data/2.5/weather?";
      url += 'APPID=' + APIKey.APIKey;
      url += `&lon=${position.coords.longitude}`;
      url += `&lat=${position.coords.latitude}`;

      axios.get(url).then( res => {
        newLocation = res.data.name;
        newTemp = res.data.main.temp;
        debugger;
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