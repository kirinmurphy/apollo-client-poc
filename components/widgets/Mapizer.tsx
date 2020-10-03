import { LooseObject } from 'codethings-react-ui/dist/widgets/types';
import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

interface Props {
  markers: LooseObject[],
  tooltipTemplate: (arg0: LooseObject) => JSX.Element;
}

export default function Mapizer ({ markers, tooltipTemplate }: Props): JSX.Element {

  const allLatLongs = markers.map(marker => marker.position);

  return (
    <div className="map">
      <Map bounds={allLatLongs}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => {
          const { position } = marker;
          return (
            <Marker position={position} key={index}>
              <Popup>
                {tooltipTemplate(marker.markerData)}
              </Popup>
            </Marker>  
          );
        })}
      </Map>
    </div>
  );
}
