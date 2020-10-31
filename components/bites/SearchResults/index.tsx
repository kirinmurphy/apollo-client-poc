import React from 'react';
import styled from 'styled-components';

import { breakpointTablet, GridList } from '../../../styles/globalCss'; 

import { BiteSummary } from './BiteSummary';
import { useCuisineFilter } from '../useCuisineFilter';
import { SearchResultsSummary } from './SearchResultsSummary';
import { BiteSourceMap } from './BiteSourceMap';
import { MSG_NO_SEARCH_RESULTS } from '../../utils/dictionary';
import useSWR from 'swr';

export function BiteList (): JSX.Element {

  const { activeCuisineType } = useCuisineFilter();

  // had to switch from using Apollo to regular rest calls
  // Apollo was causing significant cold starts in production on Heroku
  // waiting for some feedback with the strapi team before switching it back
  const API_URL_BITES = `${process.env.API_URL}/bites`;
  const params = activeCuisineType ? `/?cuisines.name=${activeCuisineType}` : '';
  const fullPath = `${API_URL_BITES}${params}`;
  const { data: bites = [], error } = useSWR(fullPath);

  console.log('data', bites);
  console.log('error', error);

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
