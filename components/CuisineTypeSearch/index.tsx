import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { useCuisineFilter } from '../../utils/useCuisineFilter';

import { CuisineTypeOption } from './CuisineTypeOption';

import '../utils/fontAwesomeLibrary';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getFilteredCuisines } from './helperGetFilteredCuisines';
import { useCallbackOnExternalEventTrigger } from 'codethings-react-ui';

export interface Cuisine {
  name: string;
  id: string | number;
}

interface Props {
  cuisines: Cuisine[]
}

const FILTER_OPTION_NAME_ALL = 'All';

export function BiteSearch ({ cuisines }: Props): JSX.Element {
  const { cuisineTypeFromUrl, updateCuisineType, clearCuisineType } = useCuisineFilter();

  const [searchInputValue, setSearchInputValue] = useState('');
  const [categoryDropdownVisible, setCategoryDropdownVisible] = useState(false);
  
  const filteredCuisines = getFilteredCuisines({ 
    cuisines, 
    cuisineTypeFromUrl, 
    searchInputValue 
  });

  const autocompleteWindowRef = useRef(null);
  useCallbackOnExternalEventTrigger(autocompleteWindowRef, () => {
    setCategoryDropdownVisible(false);
  });

  function handleChange ({ target: { value } }) {
    setSearchInputValue(value);
  }

  function handleKeypress ({ charCode }) {
    if ( charCode === 13 ) { submitSearch(searchInputValue); }
  }

  function submitSearch (newCuisineType) {
    updateCuisineType(newCuisineType);
    resetSearch();
  }

  function clearSearch () {
    clearCuisineType();
    resetSearch();
  }

  function resetSearch () {
    setSearchInputValue('');
    setCategoryDropdownVisible(false);
  }

  return (
    <SearchWrapper>
      <SearchBarWrapper>
        <input type="text"
          value={searchInputValue}
          onChange={handleChange}
          onKeyPress={handleKeypress}
          onFocus={() => setCategoryDropdownVisible(true)}
          onClick={() => setCategoryDropdownVisible(true)}
        />

        <button onClick={() => submitSearch(searchInputValue)}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </SearchBarWrapper>

      {categoryDropdownVisible && <SearchCategoryListWrapper>
        <div className="category-list" ref={autocompleteWindowRef}>
          {!!cuisineTypeFromUrl && <CuisineTypeOption 
            name={FILTER_OPTION_NAME_ALL} 
            onClick={clearSearch} 
          />}
          
          {filteredCuisines.map(({ name }, index) => (
            <CuisineTypeOption 
              key={index} 
              name={name} 
              onClick={() => submitSearch(name)} 
            />
          ))}

          {!filteredCuisines.length && <div>No new matches.</div>}
        </div>
      </SearchCategoryListWrapper>}
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  padding:.5rem 0;
`;

const SearchBarWrapper = styled.div`
  input,
  button {
    display:inline-block;
    height:2.5rem;
    line-height:2.5rem;
    font-size:1.3rem;
  }

  button {
    width: 3rem;
    line-height:2rem;
    border-radius:4px;
    color:var(--textcolor-inverted);
    background:#05182b;
  }

  input[type="text"] {
    width:calc(100% - .5rem - 3rem);
    padding:0 .5rem;
    margin-right:.5rem;
    border:1px solid #aaa;
  }
`;

const SearchCategoryListWrapper = styled.div`
  position:relative;

  .category-list {
    position:absolute;
    top:0; right:0; left:0;
    background:var(--bgcolor-base);
    border:1px solid #ddd;
    border-width:0 1px 1px 1px;
    box-shadow:0 5px 10px #333;
  }

  .option {
    padding:.25rem .5rem;
    cursor:pointer;

    &:not(:last-of-type) {
      border-bottom:1px solid #eee;
    }
  }
`;