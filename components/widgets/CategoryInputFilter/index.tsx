import React, { useReducer } from 'react';

import { 
  SearchBarWrapper, 
  FilterCategoryWrapper
} from './styles';

import { SearchInputForm } from './SearchInputForm';

import { searchFormStateReducer } from './utils/searchFormStateReducer';

import { CategoryAutocomplete } from './CategoryAutocomplete';
import { FilterOptionsProps } from './types';

interface Props {
  searchParamKey: string;
  options: FilterOptionsProps;
}

export function CategoryInputFilter ({ options, searchParamKey }: Props): JSX.Element {
  const initialSearchFormState = {
    inputValue: '',
    autocompleteVisible: false
  };

  const [
    { inputValue, autocompleteVisible }, 
    dispatch
  ] = useReducer(searchFormStateReducer, initialSearchFormState);

  return (
    <>
    <SearchBarWrapper>
      <SearchInputForm 
        searchParamKey={searchParamKey}
        inputValue={inputValue}
        searchFormDispatch={dispatch} 
      />
    </SearchBarWrapper>

    {autocompleteVisible && (
      <FilterCategoryWrapper>
        <CategoryAutocomplete
          searchParamKey={searchParamKey}
          options={options}
          inputValue={inputValue} 
          searchFormDispatch={dispatch}
        />
      </FilterCategoryWrapper>
    )}    
    </>
  );
}

