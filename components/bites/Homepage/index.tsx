import React from 'react';

import { SearchControl } from '../SearchControl';
import { SearchControlWrapper } from '../SearchControl/styles';
import { BiteList } from '../SearchResults';

export function BitesHomepage (): JSX.Element {
  return (
    <>
      <SearchControlWrapper>
        <SearchControl />
      </SearchControlWrapper>

      <BiteList />    
    </>
  );
}
