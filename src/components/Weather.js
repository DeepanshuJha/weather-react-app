import React from 'react'
import Spinner from './Spinner';
import wind from '../assets/wind.svg'
import cloud from '../assets/cloud.svg'

const Weather = ({ weatherInfo }) => {

    if (Object.keys(weatherInfo).length > 0) {
        console.log(weatherInfo)
        return (
            <div className="weatherCard-container">
                <div className="temp-container">
                    <img
                        className="weatherlogo"
                        src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
                        alt=""
                    />
                    <h2 className="temp-info">{weatherInfo.main.temp} °C</h2>
                </div>
                <div className="info-container">
                    <h2 className="city-name">{weatherInfo.name}</h2>
                    <div className="more-info">
                        <ul>
                            <li>{weatherInfo.weather[0].main}</li>
                            <li className="img-info">
                                <img src={cloud} alt="" />
                                {weatherInfo.main.temp_max} / {weatherInfo.main.temp_min} °C
                            </li>
                            <li className="img-info">
                                <img src={wind} alt="" />
                                {weatherInfo.wind.speed} m/s
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <Spinner />
        )
    }
}

export default Weather
