import React from 'react';
import styled from 'styled-components';

import { breakpointTablet, GridList } from '../styles/globalCss'; 

import { 
  BITE_QUERY, 
  FILTERED_BITE_QUERY
} from '../apollo/queries/bite/bites';

import { BiteSummary } from '../components/Bite';
import Query from './Query';
import { useCuisineFilter } from '../utils/useCuisineFilter';
import { SearchResultsSummary } from './SearchResults/SearchResultsSummary';

export function BiteList (): JSX.Element {

  const { cuisineTypeFromUrl } = useCuisineFilter();

  const queryProps = !!cuisineTypeFromUrl 
    ? { query: FILTERED_BITE_QUERY, variables: { cuisineName: cuisineTypeFromUrl } }
    : { query: BITE_QUERY }

  return (
    <Query {...queryProps}>
      {({ data }) => {
        const { bites = [] } = data;

        return bites.length ? (
          <>
            <SearchResultsSummaryWrapper>
              <SearchResultsSummary biteCount={bites.length} />
            </SearchResultsSummaryWrapper>
    
            <GridList>
              {bites.map((itemProps, index) => {
                return <BiteTheme key={index}><BiteSummary {...itemProps} /></BiteTheme>;
              })}
            </GridList>
          </>
        ) : <div>No results!</div>;
      }}
    </Query>
  );
}

const SearchResultsSummaryWrapper = styled.div`
  padding:.2rem 0;
  margin-bottom:.5rem;
  font-size:var(--fontSize-bump);

  @media(min-width:${breakpointTablet}) {
    padding:.45rem 0;
  }
`;

const BiteTheme = styled.div`
  .bite-summary__name {
    font-size:.9rem;
    font-weight:bold;
  }

  .bite-summary__source {
    font-size:var(--fontSize-small);
  }
`;
