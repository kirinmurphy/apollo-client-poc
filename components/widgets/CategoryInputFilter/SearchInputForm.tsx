import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { 
  SearchFormDispatchType,
  SEARCH_ACTION_OPEN_AUTOCOMPLETE, 
  SEARCH_ACTION_RESET_FORM, 
  SEARCH_ACTION_UPDATE_INPUT_FIELD 
} from './utils/searchFormStateReducer';

import { useKeywordSearchFilter } from '../../utils/useKeywordSearchFilter';

interface Props {
  searchFormDispatch: SearchFormDispatchType;
  inputValue: string;
  searchParamKey: string;
}

export function SearchInputForm (props: Props): JSX.Element {
  const { inputValue, searchFormDispatch, searchParamKey } = props;

  const { updateSearchKeyword } = useKeywordSearchFilter(searchParamKey);
  
  function submitForm () {
    searchFormDispatch({ type: SEARCH_ACTION_RESET_FORM });
    updateSearchKeyword(inputValue);
  }

  function handleChange ({ target: { value } }) {
    searchFormDispatch({ 
      type: SEARCH_ACTION_UPDATE_INPUT_FIELD, 
      inputValue: value 
    });
  }

  function handleKeypress ({ charCode }) {
    if ( charCode === 13 ) { submitForm(); }
  }

  return (
    <>
      <input type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeypress}
        onFocus={() => searchFormDispatch({ type: SEARCH_ACTION_OPEN_AUTOCOMPLETE })}
        onClick={() => searchFormDispatch({ type: SEARCH_ACTION_OPEN_AUTOCOMPLETE })}
      />

      <button onClick={submitForm}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </>
  );
}
