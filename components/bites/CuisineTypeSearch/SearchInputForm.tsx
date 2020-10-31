import React, { Dispatch } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { 
  SearchActionProps,
  SEARCH_ACTION_OPEN_FILTER, 
  SEARCH_ACTION_UPDATE_INPUT 
} from './helperSearchFormStateReducer';

interface Props {
  searchFormDispatch: (arg0: SearchActionProps) => void;
  submitSearch: (arg0: string) => void;
  inputValue: string;
}

export function SearchInputForm (props: Props): JSX.Element {
  const { 
    searchFormDispatch, 
    submitSearch, 
    inputValue 
  } = props;
  
  function submitInputValue () {
    submitSearch(inputValue);
  }

  function handleKeypress ({ charCode }) {
    if ( charCode === 13 ) { submitInputValue(); }
  }

  function handleChange ({ target: { value } }) {
    searchFormDispatch({ type:SEARCH_ACTION_UPDATE_INPUT, inputValue: value });
  }

  return (
    <>
      <input type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeypress}
        onFocus={() => searchFormDispatch({ type: SEARCH_ACTION_OPEN_FILTER })}
        onClick={() => searchFormDispatch({ type: SEARCH_ACTION_OPEN_FILTER })}
      />

      <button onClick={submitInputValue}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </>
  );
}
