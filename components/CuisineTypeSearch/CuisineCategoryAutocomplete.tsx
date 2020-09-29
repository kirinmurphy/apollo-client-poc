import React, { useRef } from 'react';

import { useCallbackOnExternalEventTrigger } from 'codethings-react-ui';

import { CuisineProps } from '../types';
import { MSG_NO_TYPEAHEAD_MATCHES } from '../utils/dictionary';

import { CuisineTypeOption } from './CuisineTypeOption';

const FILTER_OPTION_NAME_ALL = 'All Cuisine Types';

interface Props {
  filteredCuisines: CuisineProps[];
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

      {!filteredCuisines.length && (
        <div>{MSG_NO_TYPEAHEAD_MATCHES}</div>
      )}
    </div>
  );
}
