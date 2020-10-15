import React from 'react'
import { motion } from 'framer-motion';

import Spinner from './Spinner';
import wind from '../assets/wind.svg'
import cloud from '../assets/cloud.svg'

const Weather = ({ weatherInfo }) => {

    const bounceTransition = {
        y : {
            duration: 1,
            yoyo: Infinity,
            ease: "easeIn"
        },
        x : {
            duration: 1,
            yoyo: Infinity,
            ease: "easeIn"
        }
    }

    if (Object.keys(weatherInfo).length > 0) {
        console.log(weatherInfo)
        return (
            <motion.div 
                className="weatherCard-container"
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 0.5 }}                
            >
                <div className="temp-container">
                    <motion.img
                        transition={bounceTransition}
                        animate={{
                            y: ["0em", "2em"]
                        }}
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
                                <motion.img 
                                    transition={bounceTransition}
                                    animate={{
                                        x: ["-5px", "0px"]
                                    }}
                                    src={cloud} 
                                    alt="" 
                                />
                                {weatherInfo.main.temp_max} / {weatherInfo.main.temp_min} °C
                            </li>
                            <li className="img-info">
                                <img src={wind} alt="" />
                                {weatherInfo.wind.speed} m/s
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        )
    } else {
        return (
            <Spinner />
        )
    }
}

export default Weather
