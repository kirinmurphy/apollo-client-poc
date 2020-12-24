import React from 'react';
import { CuisineFilter } from './CuisineFilter';

import { SearchWrapper } from './styles';

export function SearchControl (): JSX.Element {  
  return (
    <SearchWrapper>
      <CuisineFilter/>
      
    </SearchWrapper>
  );
}
