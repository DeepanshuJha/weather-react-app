import React from 'react';
import weatherLogo from '../assets/weatherlogo.svg'

const Home = () => {
    return (
        <div className="home">
          <img src={weatherLogo} alt=""/>
          <h1>Weather App</h1> 
        </div>
    )
}

export default Home
