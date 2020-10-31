import { BiteSummaryProps, SourceProps } from "../../types";

interface GetSourcesWithBitesReturnProps {
  source: SourceProps;
  bites: BiteSummaryProps[];
}

export function getSourcesWithBites (
  bites:BiteSummaryProps[])
  : GetSourcesWithBitesReturnProps[] {
  
  const sourcesObject = bites.reduce((currentSources, currentBite) => {
    const existingBites = currentSources[currentBite.source.id]?.bites || [];
    return { 
      ...currentSources, 
      [currentBite.source.id]: {
        source: currentBite.source,
        bites: [
          ...existingBites, 
          {
            id: currentBite.id,
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
