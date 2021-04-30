import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import './Presmap.css';

function PresMap({ center , zoom , data}) {
    console.log(data);

    return (
        <div className="PresMap">
            <MapContainer center={center} zoom={zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${process.env.REACT_APP_APIKey}`}
                />
            </MapContainer>
        </div>
    )
}

export default PresMap;