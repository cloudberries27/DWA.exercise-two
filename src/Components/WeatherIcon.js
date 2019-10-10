import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudRain, faSmog, faCloud, faSun, faWind, faPooStorm} from '@fortawesome/free-solid-svg-icons'

export default function WeatherIcon({weatherType}){
  switch(weatherType){
    case 'Rain':
      return  <FontAwesomeIcon icon={faCloudRain} className="cloudRain"/>
    case 'Clouds':
      return <FontAwesomeIcon icon={faCloud} className="cloud"/>
    case 'Clear':
      return <FontAwesomeIcon icon={faCloud} className="cloud"/>
    case 'Haze':
      return <FontAwesomeIcon icon={faSmog} className="fog"/>
    case 'Mist':
      return <FontAwesomeIcon icon={faSmog} className="fog"/>
    case 'Fog':
      return <FontAwesomeIcon icon={faSmog} className="fog"/>
    case 'Sun':
      return <FontAwesomeIcon icon={faSun} className="sun"/>
    case 'Thunderstorm':
      return <FontAwesomeIcon icon={faPooStorm} className="thunder"/>
    case 'Wind':
      return <FontAwesomeIcon icon={faWind} className="wind"/>
    default:
      return <div>{weatherType}</div>
  }
}
