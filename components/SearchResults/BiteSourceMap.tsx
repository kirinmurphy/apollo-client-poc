import React from 'react';
import dynamic from 'next/dynamic';
import { BiteSummaryProps } from '../types';
import Head from 'next/head';

const Mapizer = dynamic(
  () => import('../widgets/Mapizer'),
  { ssr: false }
);

interface Props {
  bites: BiteSummaryProps[]
}

export function BiteSourceMap ({ bites }: Props): JSX.Element {

  const sourcesWithBites = getSourcesWithBites(bites);

  const markers = sourcesWithBites.map(({ source, bites }) => { 
    const { latitude, longitude } = source.location;
    return {
      markerData: { source, bites },
      position: [latitude, longitude]
    };
  });

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
        tooltipTemplate={({ source, bites }) => (
          <div>
            {source.name} - {source.location.neighborhood}
            
            {bites.map((bite, index) => {
              return (
                <div key={index}>{bite.name}</div>
              );
            })}
          </div>
        )}  
      />
    </>
  );
}

function getSourcesWithBites (bites) {
  const sourcesObject = bites.reduce((currentSources, currentBite) => {
    const existingBites = currentSources[currentBite.source.id]?.bites || [];
    return { 
      ...currentSources, 
      [currentBite.source.id]: {
        source: currentBite.source,
        bites: [
          ...existingBites, 
          {
            name: currentBite.name,
            photo: currentBite.photo
          }
        ]
      }
    };
  }, {});

  return Object.keys(sourcesObject).map((source) => {
    return sourcesObject[source];
  });
}
