import React from 'react';

import { useCuisineFilter } from '../../utils/useCuisineFilter';

interface Props {
  biteCount: number;
}

export function SearchResultsSummary ({ biteCount }: Props): JSX.Element {

  const { cuisineTypeFromUrl, clearCuisineType } = useCuisineFilter();

  return (
    <>
      <span>
        {biteCount} {biteCount > 1 ? 'results' : 'result'} 
        {!!cuisineTypeFromUrl && <span> for <strong>{cuisineTypeFromUrl} </strong></span>}
      </span>
      
      {!!cuisineTypeFromUrl && <span className="link"
        onClick={clearCuisineType}>
        Show All
      </span>}
    </>
  );
}
