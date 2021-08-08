import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Map from './components/maps/Map';
import "leaflet/dist/leaflet.css";
import Footer from './components/footer/Footer';

function App() {

  useEffect(() => {
    document.title="Klime"
  }, [])

  const mapCenter = [ 12.974792, 77.586038 ];
	const mapZoom = 10;

  return (
    <Router>
      <div className="App">
        <Map center={mapCenter} zoom={mapZoom}/>
        <Footer className="Footer" />
      </div>
    </Router>
  );
}

export default App;