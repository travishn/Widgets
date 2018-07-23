import React from 'react';
import { APIKey } from '../../CLIENT_SECRET';
import axios from 'axios';

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
      url += APIKey;
      url += `&lon=${position.coords.longitude}`;
      url += `&lat=${position.coords.latitude}`;

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