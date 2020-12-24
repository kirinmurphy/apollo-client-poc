import React from 'react';

import {
  MSG_RESULT_COUNT_SINGULAR,
  MSG_RESULT_COUNT_PLURAL,
  MSG_RESULT_COUNT_FOR,
  MSG_SHOW_ALL_RESULTS
} from '../../utils/dictionary';
import { useCuisineTypeFilter } from '../SearchControl/utils/keywordFilterHooks';

interface Props {
  biteCount: number;
}

export function SearchResultsSummary ({ biteCount }: Props): JSX.Element {

  const { activeSearchKeyword, clearSearchKeyword } = useCuisineTypeFilter();

  return (
    <>
      <span>
        {biteCount} {biteCount > 1 ? MSG_RESULT_COUNT_PLURAL : MSG_RESULT_COUNT_SINGULAR} 

        {!!activeSearchKeyword && (
          <>
            <span> {MSG_RESULT_COUNT_FOR} <strong>{activeSearchKeyword}</strong></span>

            &nbsp;&middot;&nbsp;

            <span className="link" onClick={clearSearchKeyword}>
              {MSG_SHOW_ALL_RESULTS}
            </span>
          </>
        )}
      </span>
    </>
  );
}
