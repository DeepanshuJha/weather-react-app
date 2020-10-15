import React from 'react';
import { motion } from 'framer-motion';

import weatherLogo from '../assets/weatherlogo.svg'

const Home = () => {
    return (
        <div className="home">
          <motion.img 
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            src={weatherLogo} alt=""
          />
          <h1>Weather App</h1> 
        </div>
    )
}

export default Home
