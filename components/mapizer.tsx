import React, { useReducer } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

function mapReducer(
  state: any, 
  action: any): any {
  
  switch (action.type) {
  case 'init': 
    return {
      ...state
    };
  
  default: throw new Error();
  }
}

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
  const initialMapState = {
    zoom: 16
  };

  const [state, dispatch] = useReducer(mapReducer, initialMapState);

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
