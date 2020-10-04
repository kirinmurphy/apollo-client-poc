import React from 'react';
import styled from 'styled-components';

import { breakpointTablet, GridList } from '../../../styles/globalCss'; 

import { 
  BITE_QUERY, 
  FILTERED_BITE_QUERY
} from '../../../apollo/queries/resources/bites';

import { BiteSummary } from './BiteSummary';
import Query from '../../widgets/Query';
import { useCuisineFilter } from '../useCuisineFilter';
import { SearchResultsSummary } from './SearchResultsSummary';
import { BiteSourceMap } from './BiteSourceMap';
import { MSG_NO_SEARCH_RESULTS } from '../../utils/dictionary';

export function BiteList (): JSX.Element {

  const { activeCuisineType } = useCuisineFilter();

  const queryProps = !!activeCuisineType 
    ? { query: FILTERED_BITE_QUERY, variables: { cuisineName: activeCuisineType } }
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
      
            <BiteSourceMapWrapper>
              <BiteSourceMap bites={bites} />
            </BiteSourceMapWrapper>

            <GridList>
              {bites.map((itemProps, index) => {
                return <BiteTheme key={index}><BiteSummary {...itemProps} /></BiteTheme>;
              })}
            </GridList>
          </>
        ) : <div>{MSG_NO_SEARCH_RESULTS}</div>;
      }}
    </Query>
  );
}

const BiteSourceMapWrapper = styled.div`
  position:relative;
  z-index:1;
  margin-bottom:1.5rem;
`;

const SearchResultsSummaryWrapper = styled.div`
  position:relative; 
  z-index: 2;
  padding:.7rem 0;

  @media(min-width:${breakpointTablet}) {
    padding:.4rem 0 1.3rem 0;
    font-size:var(--fontSize-bump);
  }
`;

const BiteTheme = styled.div`
  .bite-summary__image {
    height:0; 
    padding-bottom:60%;
    overflow:hidden;
  }

  .bite-summary__image img {
    display:block;
  }

  .bite-summary__name {
    font-size:.9rem;
    font-weight:bold;
  }

  .bite-summary__source {
    font-size:var(--fontSize-small);
  }

  .bite-summary:hover {
    cursor:pointer;

    .link {
      text-decoration:underline;
      color:var(--textcolor-link-hover);
    }
  }
`;
