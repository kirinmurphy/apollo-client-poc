import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

interface MarkerProps {
  name: string;
  neighborhood: string;
  position: {
    latitude: number;
    longitude: number;
  }
}

interface Props {
  markers: MarkerProps[];
}

export default function Mapizer ({ markers }: Props): JSX.Element {

  const allLatLongs = markers.map(marker => marker.position);

  return (
    <div className="map">
      <Map bounds={allLatLongs}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => {
          const { name, neighborhood, position } = marker;
          return (
            <Marker position={position} key={index}>
              <Popup>
                {name} - {neighborhood}
              </Popup>
            </Marker>  
          );
        })}
      </Map>
    </div>
  );
}
