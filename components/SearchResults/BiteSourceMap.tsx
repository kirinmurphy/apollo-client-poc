import React from 'react';
import dynamic from 'next/dynamic';

const Mapizer = dynamic(
  () => import('../widgets/Mapizer'),
  { ssr: false }
);

interface Props {
  bites: {
    name: string
  }[]
}

export function BiteSourceMap ({ bites }: Props): JSX.Element {

  const sourcesWithBites = getSourcesWithBites(bites);

  console.log('FEEF w bites:', sourcesWithBites);

  const markers = sourcesWithBites.map(({ source }) => { {
    const { latitude, longitude, neighborhood } = source.location;
    return {
      name: source.name,
      neighborhood: neighborhood,
      position: [latitude, longitude]
    }
  }});

  return <Mapizer markers={markers} />;
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