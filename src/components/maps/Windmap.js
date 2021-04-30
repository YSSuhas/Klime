import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import './Windmap.css';

function WindMap({ center , zoom , data}) {
    console.log(data);

    return (
        <div className="WindMap">
            <MapContainer center={center} zoom={zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${process.env.REACT_APP_APIKey}`}
                />
            </MapContainer>
        </div>
    )
}

export default WindMap;