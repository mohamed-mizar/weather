import React, { Component } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "f42c6c92576dab727cacee474903b28b";

// http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44

class App extends Component {
  state = {
    tempreature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
  };

  getWeatherButtonHandler = async (e) => {
    e.preventDefault();
    console.log("weather");
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    console.log(city, country);
    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}t&appid=${API_KEY}`
    );
    const data = await api.json();
    if (country && city) {
      this.setState({
        tempreature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        tempreature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "please enter data",
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-container">
          <Form getWeatherButton={this.getWeatherButtonHandler} />
          <Weather
            tempreature={this.state.tempreature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
