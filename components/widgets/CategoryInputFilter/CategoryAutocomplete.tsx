import React, { useRef } from 'react';
import { useCallbackOnExternalEventTrigger } from 'codethings-react-ui';

import { 
  MSG_NO_TYPEAHEAD_MATCHES, 
  MSG_FILTER_VIEW_ALL_RESULTS 
} from '../../utils/dictionary';

import { SearchFormDispatchType } from './utils/searchFormStateReducer';

import { getFilteredElements } from './utils/getFilteredElements';

import { 
  SEARCH_ACTION_CLOSE_AUTOCOMPLETE, 
  SEARCH_ACTION_RESET_FORM, 
} from './utils/searchFormStateReducer';

import { FilterTypeOption } from './FilterTypeOption';
import { useKeywordSearchFilter } from '../../utils/useKeywordSearchFilter';
import { FilterOptionsProps } from './types';

interface Props {
  inputValue: string;
  searchFormDispatch: SearchFormDispatchType;
  searchParamKey:string;
  options: FilterOptionsProps;
}

export function CategoryAutocomplete (props: Props) {
  const { 
    inputValue, 
    searchFormDispatch, 
    searchParamKey, 
    options 
  } = props;

  const { 
    activeSearchKeyword, 
    updateSearchKeyword, 
    clearSearchKeyword 
  } = useKeywordSearchFilter(searchParamKey);

  const filteredElements = getFilteredElements({ 
    options, activeSearchKeyword, inputValue 
  });

  const autocompleteRef = useRef(null);
  const closeFilter = () => searchFormDispatch({ type: SEARCH_ACTION_CLOSE_AUTOCOMPLETE });
  useCallbackOnExternalEventTrigger(autocompleteRef, closeFilter);

  return (
    <div className="category-list" ref={autocompleteRef}>
      {!!activeSearchKeyword && (
        <FilterTypeOption 
          name={MSG_FILTER_VIEW_ALL_RESULTS} 
          onClick={() => { 
            clearSearchKeyword();
            searchFormDispatch({ type: SEARCH_ACTION_RESET_FORM });
          }} 
        />
      )}
      
      {filteredElements.map(({ id, name }) => (
        <FilterTypeOption 
          key={id} 
          name={name} 
          onClick={() => { 
            updateSearchKeyword(name);
            searchFormDispatch({ type: SEARCH_ACTION_RESET_FORM });
          }} 
        />
      ))}

      {!!options && !filteredElements.length && (
        <div className="no-category-matches">{MSG_NO_TYPEAHEAD_MATCHES}</div>
      )}
    </div>
  );
}