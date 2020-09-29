import React from 'react';
import dynamic from 'next/dynamic';

const Mapizer = dynamic(
  () => import('../widgets/Mapizer'),
  { ssr: false }
);

interface BiteProps {
  name: string
}

interface Props {
  bites: BiteProps[]
}

export function BiteSourceMap ({ bites }: Props): JSX.Element {

  const sourcesWithBites = getSourcesWithBites(bites);

  const markers = sourcesWithBites.map(({ source, bites }) => { 
    const { latitude, longitude } = source.location;

    return {
      position: [latitude, longitude],
      // TODO - this seems maybe not as performant
      // but cleaner than passing the template and props separately.  better abstraction?
      tooltipTemplate: <SourceMapMarker source={source} bites={bites} />
    };
  });

  return <Mapizer markers={markers} />;
}

interface SMMProps {
  source: {
    name: string;
    location: {
      neighborhood: string;
    }
  };
  bites: BiteProps[];
}

function SourceMapMarker ({ source, bites }: SMMProps): JSX.Element {
  return (
    <div>
      {source.name} - {source.location.neighborhood}
      
      {bites.map((bite, index) => {
        return (
          <div key={index}>{bite.name}</div>
        );
      })}
    </div>
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
