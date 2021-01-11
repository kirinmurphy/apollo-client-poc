import React from 'react';

import { SearchControl } from '../SearchControl';
import { SearchControlWrapper } from '../SearchControl/styles';
import { BiteList } from '../SearchResults';
import { BiteSummaryProps } from '../types';

interface Props {
  initialBites: BiteSummaryProps[];
}

export function BitesHomepage ({ initialBites }): JSX.Element {
  return (
    <>
      <SearchControlWrapper>
        <SearchControl />
      </SearchControlWrapper>

      <BiteList initialBites={initialBites} />    
    </>
  );
}
