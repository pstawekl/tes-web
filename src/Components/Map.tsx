import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon, LatLng, LatLngExpression } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const Map = () => {
  const position = [51.601839, 18.942589];
  const zoom = 20;

  return (
    <MapContainer center={position as LatLngExpression} zoom={zoom} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position as LatLngExpression} icon={L.icon({ iconUrl: icon, shadowUrl: iconShadow })}>
        <Popup>
          Tutaj jest nasze biuro!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
