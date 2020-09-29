import React from 'react';
import dynamic from 'next/dynamic';
import { BiteSummaryProps } from '../types';
import { BiteSourceMapMarker } from './BiteSourceMapMarker';

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
      position: [latitude, longitude],
      // TODO - this seems maybe not as performant
      // but cleaner than passing the template and props separately.  better abstraction?
      tooltipTemplate: <BiteSourceMapMarker source={source} bites={bites} />
    };
  });

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
