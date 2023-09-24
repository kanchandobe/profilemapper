import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
    width: '20%',
    height: '100px',
  };

const center = {
    lat: 19.0760, // Latitude for Mumbai
    lng: 72.8777, // Longitude for Mumbai
  };

const GoogleMapComponent = () => {
    const [showComponent, setShowComponent] = useState(false);

  const handleButtonClick = () => {
    setShowComponent(true);
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyCEsr_WdGDx3eHAzq1Y6Ye5162p96IHYfc">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
