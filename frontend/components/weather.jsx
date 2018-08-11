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

  getInfo(location) {
    let url = "http://api.openweathermap.org/data/2.5/weather?";
    url += 'APPID=' + APIKey.APIKey;
    url += `&lat=${location.coords.latitude}`;
    url += `&lon=${location.coords.longitude}`;

    axios.get(url).then(res => {
      this.setState( {location: res.data.name} );
      const newTemp = ((res.data.main.temp  - 273.15) * 1.8 + 32).toFixed(1);
      this.setState({temperature: newTemp});
    });
  }

  // Would usually hit a frontend route which will hit a backend route which will make the API request
  componentDidMount() {
    // Grabs a location and on success, passes the location object to our getInfo funtion
    // Don't need to bind this.getInfo in our constructor function because we use an arrow function which preserves where this.getInfo was defined initially (which was under the Weather object)
    navigator.geolocation.getCurrentPosition(location => {
      return this.getInfo(location);
    });


    // Purposely wrote it wrong to iterate the fact that the context of the this below
    // refers to the global object / window where getInfo is not defined

    // navigator.geolocation.getCurrentPosition(function(location) {
    //   return this.getInfo(location);
    // });
  }

  render() {
    if (this.state.temperature !== '') {
      return <section className="weather-container">
        <h2>Weather</h2>

        <div className="weather-wrapper">
          <div className="weather-info">
            <h5>{this.state.location}</h5>
            <h5>{this.state.temperature}&deg;F</h5>
          </div>
        </div>
      </section>;
    } else {
      return <section className="weather-container">
          <h2>Weather</h2>

          <div className="weather-wrapper">
            <div className="weather-info">
            </div>
          </div>
        </section>;
    }
  }
}

export default Weather;