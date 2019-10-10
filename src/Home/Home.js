import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PageWrapper from '../Components/pageWrapper.js';
import WeatherIcon from '../Components/WeatherIcon.js';

const apiKey = 'c49ef0d835c2292855a3e49a74432e28';

export default function Home(props){
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [weatherType, setWeatherType] = useState('');
  const [cloudy, setCloudy] = useState(0);

  function apiCallback(response){
    console.log(response);
    setWeather(response.data);
  }
  useEffect(()=>{
    const urlParams = new URLSearchParams(props.location.search);
    const cityParam = urlParams.get('city') ? urlParams.get('city') : 'London';
    setCity(cityParam);

    const query = `https://api.openweathermap.org/data/2.5/weather?q=${cityParam}&APPID=${apiKey}`;
    axios.get(query).then(response => apiCallback(response));
  }, []);

  useEffect(()=>{
    let getWeatherType = weather.weather ? weather.weather[0].main : '';
    let getCloudy = weather.clouds ? weather.clouds.all : 0;
    setWeatherType(getWeatherType);
    setCloudy(getCloudy);
  },[weather]);

  return (
  <PageWrapper cloud={cloudy}>
    <div className='component'>
      <div className='navbar'>
        <a className={`WeatherNav_Item ${city === 'Seoul' ? 'WeatherNav_Item--active' : ''}`} href ="/?city=Seoul">Seoul</a>
        <a className={`WeatherNav_Item ${city === 'London' ? 'WeatherNav_Item--active' : ''}`} href ="/?city=London">London</a>
        <a className={`WeatherNav_Item ${city === 'Chicago' ? 'WeatherNav_Item--active' : ''}`} href ="/?city=Chicago">Chicago</a>
        <a className={`WeatherNav_Item ${city === 'Miami' ? 'WeatherNav_Item--active' : ''}`} href ="/?city=Miami">Miami</a>
      </div>
      <div className='text'>
        <div className='header'>
          <h1>Weather in {city}</h1>
          <WeatherIcon weatherType={weatherType}/>
        </div>
        <div className='information'>
          <p>Weather Type: {weather.weather && weather.weather[0].main} </p>
          <p>Current Temperature: {weather.main && weather.main.temp}</p>
          <p>Today's High Temperature: {weather.main && weather.main.temp_max}</p>
          <p>Today's Low Temperature: {weather.main && weather.main.temp_min}</p>
          <p>Humidity: {weather.main && weather.main.humidity}</p>
          <p>Cloudy: {weather.clouds && weather.clouds.all }</p>
          <p>Wind: {weather.wind && weather.wind.speed}km/H coming at {weather.wind && weather.wind.deg}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
  )
}
