import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';

import { GridList } from '../../pageElements/styles-elements'; 

import { SearchResultsSummary } from './SearchResultsSummary';
import { SwrResourceView } from '../../widgets/SwrResourceView';
import { BiteSummary } from '../BiteSummary';
import { BiteSummaryTheme } from '../BiteSummary/styles';

import { SearchResultsSummaryWrapper } from './styles';
import { useCuisineTypeFilter } from '../SearchControl/utils/keywordFilterHooks';
import { getBiteQueryProps } from './utils/getBiteQueryProps';
import { BiteSummaryProps } from '../types';

interface Props {
  initialBites: BiteSummaryProps[];
}

export function BiteList ({ initialBites }): JSX.Element {

  const { activeSearchKeyword } = useCuisineTypeFilter();
  const { biteQuery, biteFetcher } = getBiteQueryProps(activeSearchKeyword);

  console.log('fefe', activeSearchKeyword);
  const config = activeSearchKeyword ? { initialData: initialBites } : {};
  const { data, error } = useSWR(biteQuery, biteFetcher, config);

  console.log('ffffff', activeSearchKeyword);
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
