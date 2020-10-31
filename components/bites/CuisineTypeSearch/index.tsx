import React, { useReducer } from 'react';
import useSWR from 'swr';

import '../../utils/fontAwesomeLibrary';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useCuisineFilter } from '../useCuisineFilter';
import { getFilteredCuisines } from './helperGetFilteredCuisines';
import { 
  searchFormStateReducer, 
  SEARCH_ACTION_CLOSE_FILTER, 
  SEARCH_ACTION_OPEN_FILTER, 
  SEARCH_ACTION_RESET_SEARCH, 
  SEARCH_ACTION_UPDATE_INPUT 
} from './helperSearchFormStateReducer';

import { CuisineCategoryAutocomplete } from './CuisineCategoryAutocomplete';

import { 
  SearchBarWrapper, 
  CuisineCategoryWrapper, 
  SearchWrapper 
} from './styles';

import { SwrResourceView } from '../../widgets/SwrResourceView';

export function CuisineTypeSearch (): JSX.Element {
  const { 
    activeCuisineType, 
    updateCuisineType, 
    clearCuisineType 
  } = useCuisineFilter();

  const initialSearchFormState = {
    inputValue: '',
    autocompleteVisible: false
  };

  const [searchFormState, dispatch] = useReducer(searchFormStateReducer, initialSearchFormState);
  const { inputValue, autocompleteVisible } = searchFormState;

  const API_URL_CUISINES = `${process.env.API_URL}/cuisines`;
  const cuisinePathSwr =  useSWR(API_URL_CUISINES);
  const { data: cuisines = [] } = cuisinePathSwr;

  const filteredCuisines = getFilteredCuisines({ 
    cuisines, 
    activeCuisineType, 
    inputValue 
  });

  function handleChange ({ target: { value } }) {
    dispatch({ type:SEARCH_ACTION_UPDATE_INPUT, inputValue: value });
  }

  function handleKeypress ({ charCode }) {
    if ( charCode === 13 ) { submitSearch(inputValue); }
  }

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
        <input type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeypress}
          onFocus={() => dispatch({ type: SEARCH_ACTION_OPEN_FILTER })}
          onClick={() => dispatch({ type: SEARCH_ACTION_OPEN_FILTER })}
        />

        <button onClick={() => submitSearch(inputValue)}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </SearchBarWrapper>

      {autocompleteVisible && (
        <CuisineCategoryWrapper>
          <CuisineCategoryAutocomplete 
            filteredCuisines={filteredCuisines}
            closeFilter={() => dispatch({ type: SEARCH_ACTION_CLOSE_FILTER})}
            submitSearch={submitSearch}
            clearSearch={clearSearch}
            showClearOption={!!activeCuisineType}
          />
        </CuisineCategoryWrapper>
      )}
    </SearchWrapper>
  );
}
