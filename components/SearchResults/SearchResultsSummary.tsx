import React from 'react';

import { useCuisineFilter } from '../utils/useCuisineFilter';

import {
  MSG_RESULT_COUNT_SINGULAR,
  MSG_RESULT_COUNT_PLURAL,
  MSG_RESULT_COUNT_FOR,
  MSG_SHOW_ALL_RESULTS
} from '../utils/dictionary';

interface Props {
  biteCount: number;
}

export function SearchResultsSummary ({ biteCount }: Props): JSX.Element {

  const { cuisineTypeFromUrl, clearCuisineType } = useCuisineFilter();

  return (
    <>
      <span>
        {biteCount} {biteCount > 1 ? MSG_RESULT_COUNT_PLURAL : MSG_RESULT_COUNT_SINGULAR} 

        {!!cuisineTypeFromUrl && (
          <>
            <span> {MSG_RESULT_COUNT_FOR} <strong>{cuisineTypeFromUrl}</strong></span>

            &nbsp;&middot;&nbsp;

            <span className="link" onClick={clearCuisineType}>
              {MSG_SHOW_ALL_RESULTS}
            </span>
          </>
        )}
      </span>
    </>
  );
}
