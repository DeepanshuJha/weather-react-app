import React, { useState } from 'react'
import search from '../assets/search.svg'
import axios from 'axios';

const WeatherForm = ({ setWeatherInfo, setIsLoading }) => {

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (text.length > 0) {
            setIsLoading(true);
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=9a33653dc322fb9b54b99f999c7bde2e`)
                .then(res => {
                    setWeatherInfo(res.data)
                    setIsLoading(false);
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    className="search"
                    value={text}                
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit"><img src={search} alt=""/></button>
            </form>
        </div>
    )
}

export default WeatherForm