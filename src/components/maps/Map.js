import React , { useState, useEffect, useCallback, useMemo } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import './Map.css';
import axios from 'axios';

function GetPosition({ map }) {

  const { REACT_APP_APIKey } = process.env;

  const [ clicked, setClicked ] = useState(false);
  const [ weather, setWeather ] = useState({});
  const [ position, setPosition ] = useState(map.getCenter());

  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [map])

  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])

  const getWeather = (e) => {
    e.preventDefault();
    if(clicked) {
      setClicked(false);
    }
    else {
      setClicked(true);
    }
  }

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.lat.toFixed(4)}&lon=${position.lng.toFixed(4)}&appid=${REACT_APP_APIKey}`);
      setWeather(data);
      console.log(weather);
    };
    getData();
  }, [clicked]);

  return (
    <div className="Body">  
      <button onClick={getWeather} className="Button">Find Weather</button>
      <div className="Display">
        {weather.main && 
          <div className="Text">
            <div className="T">
              {weather.name ? (
                <h4>{weather.name}, {weather.sys.country}</h4>
              ) : (
                <h4>Unknown Place</h4>
              )}
              <h4>Temperature is {weather.main.temp} K</h4>
              <h4>Pressure is {weather.main.pressure} hPa</h4>
            </div>
            <div className="T">
              <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} height="50%"></img>
              <h5>{weather.weather[0].description}</h5>
            </div>
            <div className="T">
              <h4>Wind Speed is {weather.wind.speed} m/s</h4>
              <h4>Wind direction is {weather.wind.deg} degrees</h4>
            </div>
            <div className="T">
              <h4>{weather.clouds.all}% Cloudiness</h4>
              <h4>{weather.main.humidity}% Humidity</h4>
            </div>
            <div className="T">
              <h4>Latitude: {weather.coord.lat}</h4>
              <h4>Longitude: {weather.coord.lon}</h4>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

function Map({ center , zoom}) {

  const [map, setMap] = useState(null)

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        whenCreated={setMap}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    ),
    [],
  )

  return (
    <div className="Map">
      {map ? <GetPosition map={map} /> : null}
      {displayMap}
    </div>
  )
}

export default Map;