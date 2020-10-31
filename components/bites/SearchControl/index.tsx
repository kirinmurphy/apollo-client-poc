import React, { useReducer } from 'react';

import { searchFormStateReducer } from './helperSearchFormStateReducer';

import { 
  SearchBarWrapper, 
  CuisineCategoryWrapper, 
  SearchWrapper 
} from './styles';

import { SearchInputForm } from './SearchInputForm';
import { CuisineCategoryAutocomplete } from './CuisineCategoryAutocomplete';

export function SearchControl (): JSX.Element {
  const initialSearchFormState = {
    inputValue: '',
    autocompleteVisible: false
  };

  const [
    { inputValue, autocompleteVisible }, 
    dispatch
  ] = useReducer(searchFormStateReducer, initialSearchFormState);
  
  return (
    <SearchWrapper>
      <SearchBarWrapper>
        <SearchInputForm 
          inputValue={inputValue}
          searchFormDispatch={dispatch} 
        />
      </SearchBarWrapper>

      {autocompleteVisible && (
        <CuisineCategoryWrapper>
          <CuisineCategoryAutocomplete
            inputValue={inputValue} 
            searchFormDispatch={dispatch}
          />
        </CuisineCategoryWrapper>
      )}
    </SearchWrapper>
  );
}
