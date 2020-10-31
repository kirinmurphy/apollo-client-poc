import React from 'react';
import useSWR from 'swr';

import { GridList } from '../../../styles/globalCss'; 

import { useKeywordSearchFilter } from '../useKeywordSearchFilter';

import { SearchResultsSummary } from './SearchResultsSummary';
import { BiteSourceMap } from './BiteSourceMap';
import { SwrResourceView } from '../../widgets/SwrResourceView';
import { BiteSummary } from './BiteSummary';
import { BiteSourceMapWrapper, BiteTheme, SearchResultsSummaryWrapper } from './styles';

export function BiteList (): JSX.Element {

  const { activeSearchKeyword } = useKeywordSearchFilter();

  // had to switch from using Apollo to regular rest calls
  // Apollo was causing significant cold starts in production on Heroku
  // waiting for some feedback with the strapi team before switching it back
  const bitePathSwrProps = useSWR(getBitePath(activeSearchKeyword));

  return (
    <SwrResourceView {...bitePathSwrProps}>
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

function getBitePath (activeSearchKeyword) {
  const API_URL_BITES = `${process.env.API_URL}/bites`;
  // :/ strapi bug?  no syntax for OR queries return correctly, return results for AND
  // const params = activeSearchKeyword 
  //   ? `/?name_contains=${activeSearchKeyword}&cuisines.name=${activeSearchKeyword}` 
  //   : '';
  const params = activeSearchKeyword ? `/?cuisines.name=${activeSearchKeyword}` : '';
  return API_URL_BITES + params;
}
