type SearchActionTypes = 
  'updateSearchInput' | 
  'openCuisineFilter' | 
  'closeCuisineFilter' | 
  'resetSearch';

export interface SearchActionProps {
  type?: SearchActionTypes;
  inputValue?: string;
}

interface SearchStateProps {
  inputValue: string;
  autocompleteVisible: boolean;
}

export const SEARCH_ACTION_UPDATE_INPUT = 'updateSearchInput';
export const SEARCH_ACTION_OPEN_FILTER = 'openCuisineFilter';
export const SEARCH_ACTION_CLOSE_FILTER = 'closeCuisineFilter';
export const SEARCH_ACTION_RESET_SEARCH = 'resetSearch';

export function searchFormStateReducer (
  state: SearchStateProps, 
  action: SearchActionProps): SearchStateProps {
  
  const resetSearchState = {
    inputValue: '',
    autocompleteVisible: false
  }

  switch (action.type) {
  case SEARCH_ACTION_UPDATE_INPUT: 
    return {
      ...state,
      inputValue: action.inputValue,
      autocompleteVisible: true
    };

  case SEARCH_ACTION_RESET_SEARCH: 
    return {
      ...state,
      ...resetSearchState
    };
  
  case SEARCH_ACTION_CLOSE_FILTER: 
    return {
      ...state,
      autocompleteVisible: false
    };

  case SEARCH_ACTION_OPEN_FILTER:
    return {
      ...state,
      autocompleteVisible: true
    };

  default: 
    throw new Error();
  }
}
