import React, { useReducer } from 'react';

import '../../utils/fontAwesomeLibrary';

import { useCuisineFilter } from '../useCuisineFilter';

import { 
  searchFormStateReducer, 
  SEARCH_ACTION_RESET_SEARCH
} from './helperSearchFormStateReducer';

import { CuisineCategoryAutocomplete } from './CuisineCategoryAutocomplete';

import { 
  SearchBarWrapper, 
  CuisineCategoryWrapper, 
  SearchWrapper 
} from './styles';
import { SearchInputForm } from './SearchInputForm';

export function CuisineTypeSearch (): JSX.Element {
  const {
    updateCuisineType, 
    clearCuisineType 
  } = useCuisineFilter();

  const initialSearchFormState = {
    inputValue: '',
    autocompleteVisible: false
  };

  const [{ 
    inputValue, 
    autocompleteVisible 
  }, dispatch] = useReducer(searchFormStateReducer, initialSearchFormState);

  function submitSearch (newCuisineType) {
    updateCuisineType(newCuisineType);
    dispatch({ type: SEARCH_ACTION_RESET_SEARCH });
  }

  function clearSearch () {
    clearCuisineType();
    dispatch({ type: SEARCH_ACTION_RESET_SEARCH });
  }

  return (
    <SearchWrapper>
      <SearchBarWrapper>
        <SearchInputForm 
          searchFormDispatch={dispatch} 
          submitSearch={submitSearch}
          inputValue={inputValue}
        />
      </SearchBarWrapper>

      {autocompleteVisible && (
        <CuisineCategoryWrapper>
          <CuisineCategoryAutocomplete
            inputValue={inputValue} 
            searchFormDispatch={dispatch}
            submitSearch={submitSearch}
            clearSearch={clearSearch}
          />
        </CuisineCategoryWrapper>
      )}
    </SearchWrapper>
  );
}
