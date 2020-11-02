import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import { LooseObject } from 'codethings-react-ui/dist/widgets/types';

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
        {markers.map(({ markerData, position }) => {
          return (
            <Marker position={position} key={markerData.source.id}>
              <Popup>
                {tooltipTemplate(markerData)}
              </Popup>
            </Marker>  
          );
        })}
      </Map>
    </div>
  );
}
