import React from 'react';

import { MSG_SHOW_ALL_RESULTS } from '../../utils/dictionary';

import { useCuisineTypeFilter } from '../SearchControl/utils/keywordFilterHooks';

export function SearchResultsSummary (): JSX.Element {

  const { activeSearchKeyword, clearSearchKeyword } = useCuisineTypeFilter();

  return (
    <>
      <span> &nbsp;

        {!!activeSearchKeyword && (
          <>
            <span> 
              {activeSearchKeyword}
            </span>

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
