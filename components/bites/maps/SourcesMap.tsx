import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { SourceMapMarkerProps } from '../utils/getSourcesWithBites';

const Mapizer = dynamic(
  () => import('../../widgets/Mapizer'),
  { ssr: false }
);

interface Props {
  sources: SourceMapMarkerProps[];
}

export function SourcesMap ({ sources }: Props): JSX.Element {
  const markers = sources.map(getMarkerProps);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""/>
        
        <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
          integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
          crossOrigin=""></script>      
      </Head>
      <Mapizer 
        markers={markers} 
        tooltipTemplate={({ source, bites = [] }) => (
          <div>
            {source.name} - {source.location.neighborhood}
            
            {bites.length && bites.map(({ id, name }) => {
              return <div key={id}>{name}</div>;
            })}
          </div>
        )}  
      />
    </>
  );
}

function getMarkerProps ({ source, bites }) { 
  const { latitude, longitude } = source.location;
  return {
    markerData: { source, bites },
    position: [latitude, longitude]
  };
}
