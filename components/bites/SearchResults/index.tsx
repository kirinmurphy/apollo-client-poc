import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';

import { GridList } from '../../../styles/globalStyles'; 

import { SearchResultsSummary } from './SearchResultsSummary';
import { SwrResourceView } from '../../widgets/SwrResourceView';
import { BiteSummary } from './BiteSummary';
import { BiteSummaryTheme, SearchResultsSummaryWrapper } from './styles';
import { useCuisineTypeFilter } from '../SearchControl/utils/keywordFilterHooks';
import { getBiteQueryProps } from './utils/getBiteQueryProps';
import { BiteSummaryProps } from '../types';

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
            <SearchResultsSummary />
          </SearchResultsSummaryWrapper>

          <GridList>
            {bites.map((bite) => {
              const { id, source } = bite;
              const linkToSource = `/source/${encodeURIComponent(source.id)}`;

              return (
                <BiteSummaryTheme link={true} key={id}>
                  <Link href={linkToSource}>
                    <a><BiteSummary {...bite} /></a>
                  </Link>
                </BiteSummaryTheme>
              );
            })}
          </GridList>        
        </>
      )}
    </SwrResourceView>
  );
}
