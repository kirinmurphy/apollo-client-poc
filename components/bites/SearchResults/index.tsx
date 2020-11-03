import React from 'react';
import useSWR from 'swr';

import { GridList } from '../../../styles/globalCss'; 

import { useKeywordSearchFilter } from '../useKeywordSearchFilter';

import { SearchResultsSummary } from './SearchResultsSummary';
import { BiteSourceMap } from './BiteSourceMap';
import { SwrResourceView } from '../../widgets/SwrResourceView';
import { BiteSummary } from './BiteSummary';
import { BiteSourceMapWrapper, BiteTheme, SearchResultsSummaryWrapper } from './styles';
import { defaultGraphQlFetcher, GRAPHQL_URL } from '../../../utils/graphql-request-fetcher';
import { BITE_QUERY, FILTERED_BITE_QUERY } from '../queries/bites';
import request from 'graphql-request';

export function BiteList (): JSX.Element {

  const { activeSearchKeyword } = useKeywordSearchFilter();

  const query = !!activeSearchKeyword 
    ? [FILTERED_BITE_QUERY, activeSearchKeyword]  
    : BITE_QUERY;

  const fetcher = !!activeSearchKeyword
    ? (query, id) => request(GRAPHQL_URL, query, { searchKeyword: id })
    : defaultGraphQlFetcher;

  const staticBitePathProps = useSWR(query, fetcher);

  return (
    <SwrResourceView {...staticBitePathProps}
      collection={staticBitePathProps.data?.bites}>
      {(bites) => (
        <>
          <SearchResultsSummaryWrapper>
            <SearchResultsSummary biteCount={bites?.length} />
          </SearchResultsSummaryWrapper>

          <BiteSourceMapWrapper>
            <BiteSourceMap bites={bites} />
          </BiteSourceMapWrapper>

          <GridList>
            {bites.map((itemProps) => {
              return <BiteTheme key={itemProps.id}>
                <BiteSummary {...itemProps} />
              </BiteTheme>;
            })}
          </GridList>        
        </>
      )}
    </SwrResourceView>
  );
}
