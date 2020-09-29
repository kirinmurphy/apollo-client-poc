import React, { useRef } from 'react';

import { useCallbackOnExternalEventTrigger } from 'codethings-react-ui';

import { CuisineTypeOption } from './CuisineTypeOption';
import { Cuisine } from './types';

const FILTER_OPTION_NAME_ALL = 'All Cuisine Types';

interface Props {
  filteredCuisines: Cuisine[];
  showClearOption: boolean;
  closeFilter: () => void;
  clearSearch: () => void;
  submitSearch: (arg0: string) => void;
}

export function CuisineCategoryAutocomplete (props: Props): JSX.Element {
  const { 
    filteredCuisines, 
    showClearOption,
    closeFilter, 
    clearSearch, 
    submitSearch
  } = props;

  const autocompleteRef = useRef(null);
  useCallbackOnExternalEventTrigger(autocompleteRef, () => closeFilter());

  return (
    <div className="category-list" ref={autocompleteRef}>
      {showClearOption && <CuisineTypeOption 
        name={FILTER_OPTION_NAME_ALL} 
        onClick={clearSearch} 
      />}
      
      {filteredCuisines.map(({ name }, index) => (
        <CuisineTypeOption 
          key={index} 
          name={name} 
          onClick={() => submitSearch(name)} 
        />
      ))}

      {!filteredCuisines.length && <div>No new matches.</div>}
    </div>
  );
}
