import React, { useState, useEffect } from 'react';
import './Result.css';
import axios from 'axios';

function Result({ lng, lat}) {

    const [ weather, setWeather] = useState({});

    useEffect(() => {
        const getData = async () => {
          const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_APIKey}`);
          setWeather(data);
        };
        getData();
      }, []);

      console.log(weather);

    return (
        <div className="Result">
            <div className="City">
                <h2>{weather.main.temp}</h2>
            </div>
            <div className="Icon">
        	    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
            </div>
            <div className="Info">
                <h2>{weather[0].description}</h2>
            </div>
        </div>
    )
}

export default Result;