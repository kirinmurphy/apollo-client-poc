import React from 'react';
import useSWR from 'swr';

import { GridList } from '../../../styles/globalCss'; 

import { SearchResultsSummary } from './SearchResultsSummary';
import { SwrResourceView } from '../../widgets/SwrResourceView';
import { BiteSummary } from './BiteSummary';
import { BiteTheme, SearchResultsSummaryWrapper } from './styles';
import { useCuisineTypeFilter } from '../SearchControl/utils/keywordFilterHooks';
import { getBiteQueryProps } from './utils/getBiteQueryProps';
import { BiteSummaryProps } from '../../types';

export function BiteList (): JSX.Element {
  
  const { activeSearchKeyword } = useCuisineTypeFilter();
  const { biteQuery, biteFetcher } = getBiteQueryProps(activeSearchKeyword);
  const { data, error } = useSWR(biteQuery, biteFetcher);

  return (
    <SwrResourceView<BiteSummaryProps[]>
      collection={data?.bites}
      error={error}>

      {({ collection: bites }) => (
        <>
          <SearchResultsSummaryWrapper>
            <SearchResultsSummary biteCount={bites?.length} />
          </SearchResultsSummaryWrapper>

          <GridList>
            {bites.map((itemProps) => {
              return (
                <BiteTheme key={itemProps.id}>
                  <BiteSummary {...itemProps} />
                </BiteTheme>
              );
            })}
          </GridList>        
        </>
      )}
    </SwrResourceView>
  );
}
