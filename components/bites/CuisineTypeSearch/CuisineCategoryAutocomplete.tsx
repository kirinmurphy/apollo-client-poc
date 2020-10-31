import React, { useRef } from 'react';
import useSWR from 'swr';

import { useCallbackOnExternalEventTrigger } from 'codethings-react-ui';

import { 
  MSG_NO_TYPEAHEAD_MATCHES, 
  MSG_FILTER_VIEW_ALL_RESULTS 
} from '../../utils/dictionary';

import { CuisineTypeOption } from './CuisineTypeOption';
import { SEARCH_ACTION_CLOSE_FILTER } from './helperSearchFormStateReducer';
import { useCuisineFilter } from '../useCuisineFilter';
import { getFilteredCuisines } from './helperGetFilteredCuisines';

interface Props {
  inputValue: string;
  clearSearch: () => void;
  submitSearch: (arg0: string) => void;
  searchFormDispatch: any;
}

export function CuisineCategoryAutocomplete (props: Props): JSX.Element {
  const { 
    inputValue,
    searchFormDispatch,
    clearSearch, 
    submitSearch
  } = props;

  const { activeCuisineType } = useCuisineFilter();

  const API_URL_CUISINES = `${process.env.API_URL}/cuisines`;
  const cuisinePathSwr =  useSWR(API_URL_CUISINES);
  const { data: cuisines = [] } = cuisinePathSwr;

  const filteredCuisines = getFilteredCuisines({ 
    cuisines, 
    activeCuisineType, 
    inputValue 
  });

  const autocompleteRef = useRef(null);
  const closeFilter = () => searchFormDispatch({ type: SEARCH_ACTION_CLOSE_FILTER });
  useCallbackOnExternalEventTrigger(autocompleteRef, closeFilter);

  return (
    <div className="category-list" ref={autocompleteRef}>
      {!!activeCuisineType && (
        <CuisineTypeOption 
          name={MSG_FILTER_VIEW_ALL_RESULTS} 
          onClick={clearSearch} 
        />
      )}
      
      {filteredCuisines.map(({ name }, index) => (
        <CuisineTypeOption 
          key={index} 
          name={name} 
          onClick={() => submitSearch(name)} 
        />
      ))}

      {!filteredCuisines.length && (
        <div className="no-category-matches">{MSG_NO_TYPEAHEAD_MATCHES}</div>
      )}
    </div>
  );
}
