import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

import './App.css';
import Home from './components/Home';
import Weather from './components/Weather';
import WeatherForm from './components/WeatherForm';
import Spinner from './components/Spinner';

const App = () => {

  const [weatherInfo, setWeatherInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=9a33653dc322fb9b54b99f999c7bde2e`)
          .then(res => {
            setWeatherInfo(res.data)
            setIsLoading(false);
          })
          .catch(err => console.log(err))
      });
    } else {
      console.log("NA");
    }
  }, []);

  return (
    <div className="main">
      <div className="overlay">
        <motion.div 
          className="container"
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          <Home />
          <WeatherForm setWeatherInfo={setWeatherInfo} setIsLoading={setIsLoading} />
          {
            isLoading ? 
            <Spinner /> : 
            <Weather weatherInfo={weatherInfo} />
          }
        </motion.div>
      </div>
    </div>
  );
}

export default App;
