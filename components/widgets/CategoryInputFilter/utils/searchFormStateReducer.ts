type SearchActionTypes = 
  'updateSearchInputField' | 
  'openSearchAutocomplete' | 
  'closeSearchAutocomplete' | 
  'resetSearchForm';

export interface SearchActionProps {
  type: SearchActionTypes;
  inputValue?: string;
}

export type SearchFormDispatchType = (arg0: SearchActionProps) => void;

interface SearchStateProps {
  inputValue: string;
  autocompleteVisible: boolean;
}

export const SEARCH_ACTION_UPDATE_INPUT_FIELD = 'updateSearchInputField';
export const SEARCH_ACTION_OPEN_AUTOCOMPLETE = 'openSearchAutocomplete';
export const SEARCH_ACTION_CLOSE_AUTOCOMPLETE = 'closeSearchAutocomplete';
export const SEARCH_ACTION_RESET_FORM = 'resetSearchForm';

export function searchFormStateReducer (
  state: SearchStateProps, 
  action: SearchActionProps): SearchStateProps {
  
  switch (action.type) {
  case SEARCH_ACTION_RESET_FORM: 
    return {
      ...state,
      inputValue: '',
      autocompleteVisible: false
    };

  case SEARCH_ACTION_UPDATE_INPUT_FIELD: 
    return {
      ...state,
      inputValue: action.inputValue,
      autocompleteVisible: true
    };
  
  case SEARCH_ACTION_CLOSE_AUTOCOMPLETE: 
    return {
      ...state,
      autocompleteVisible: false
    };

  case SEARCH_ACTION_OPEN_AUTOCOMPLETE:
    return {
      ...state,
      autocompleteVisible: true
    };

  default: 
    throw new Error();
  }
}
