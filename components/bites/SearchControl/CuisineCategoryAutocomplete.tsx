import React, { useRef } from 'react';
import useSWR from 'swr';
import { useCallbackOnExternalEventTrigger } from 'codethings-react-ui';

import { 
  MSG_NO_TYPEAHEAD_MATCHES, 
  MSG_FILTER_VIEW_ALL_RESULTS 
} from '../../utils/dictionary';

import { useKeywordSearchFilter } from '../useKeywordSearchFilter';
import { getFilteredCuisines } from './helperGetFilteredCuisines';

import { 
  SearchFormDispatchType, 
  SEARCH_ACTION_CLOSE_AUTOCOMPLETE, 
  SEARCH_ACTION_RESET_FORM, 
} from './helperSearchFormStateReducer';

import { CuisineTypeOption } from './CuisineTypeOption';

interface Props {
  inputValue: string;
  searchFormDispatch: SearchFormDispatchType;
}

export function CuisineCategoryAutocomplete (props: Props): JSX.Element {
  const { inputValue, searchFormDispatch } = props;

  const { 
    activeSearchKeyword, 
    updateSearchKeyword, 
    clearSearchKeyword 
  } = useKeywordSearchFilter();

  const API_URL_CUISINES = `${process.env.API_URL}/cuisines`;
  const cuisinePathSwr =  useSWR(API_URL_CUISINES);
  const { data: cuisines = [] } = cuisinePathSwr;

  const filteredCuisines = getFilteredCuisines({ 
    cuisines, activeSearchKeyword, inputValue 
  });

  const autocompleteRef = useRef(null);
  const closeFilter = () => searchFormDispatch({ type: SEARCH_ACTION_CLOSE_AUTOCOMPLETE });
  useCallbackOnExternalEventTrigger(autocompleteRef, closeFilter);

  return (
    <div className="category-list" ref={autocompleteRef}>
      {!!activeSearchKeyword && (
        <CuisineTypeOption 
          name={MSG_FILTER_VIEW_ALL_RESULTS} 
          onClick={() => { 
            clearSearchKeyword();
            searchFormDispatch({ type: SEARCH_ACTION_RESET_FORM });
          }} 
        />
      )}
      
      {filteredCuisines.map(({ id, name }) => (
        <CuisineTypeOption 
          key={id} 
          name={name} 
          onClick={() => { 
            updateSearchKeyword(name);
            searchFormDispatch({ type: SEARCH_ACTION_RESET_FORM });
          }} 
        />
      ))}

      {!!cuisines && !filteredCuisines.length && (
        <div className="no-category-matches">{MSG_NO_TYPEAHEAD_MATCHES}</div>
      )}
    </div>
  );
}
