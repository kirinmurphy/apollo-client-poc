import React from 'react';
import { FilterCuisine } from './FilterCuisine';
import { FilterNeighborhood } from './FilterNeighborhood';

import { SearchWrapper } from './styles';

export function SearchControl (): JSX.Element {  
  return (
    <SearchWrapper>
      <FilterCuisine/>
      {/* TODO: needs to be wired into search results */}
      {/* <FilterNeighborhood /> */}
    </SearchWrapper>
  );
}
