import React, { useState } from 'react';
import styled from 'styled-components';

import { useCuisineFilter } from '../utils/useCuisineFilter';

import { CuisineTypeOption } from './CuisineTypeOption';

import './utils/fontAwesomeLibrary';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from '@fortawesome/free-solid-svg-icons';


interface Props {
  cuisines: {
    name: string;
    id: string | number;
  }[]
}

const FILTER_OPTION_NAME_ALL = 'All';

export function BiteSearch ({ cuisines }: Props): JSX.Element {
  const { updateCuisineType, clearCuisineType } = useCuisineFilter();

  const [searchInputValue, setSearchInputValue] = useState('');
  
  function handleChange ({ target: { value } }) {
    setSearchInputValue(value);
  }

  function handleKeypress ({ charCode }) {
    if ( charCode === 13 ) { submitSearch(searchInputValue); }
  }

  function submitSearch (newCuisineType) {
    updateCuisineType(newCuisineType);
  }

  return (
    <SearchWrapper>
      <SearchBarWrapper>
        <input type="text"
          value={searchInputValue}
          onChange={handleChange}
          onKeyPress={handleKeypress}
        />

        <button onClick={() => submitSearch(searchInputValue)}>
          <FontAwesomeIcon icon={faFlask} />
        </button>
      </SearchBarWrapper>

      {!searchInputValue && <CuisineTypeOption 
        name={FILTER_OPTION_NAME_ALL} 
        onClick={clearCuisineType} 
      />}
      
      {cuisines
        .filter(cuisineType => getCuisineMatches(cuisineType, searchInputValue))
        .map(({ name }, index) => (
          <CuisineTypeOption 
            key={index} 
            name={name} 
            onClick={() => submitSearch(name)} 
          />
        ))
      }
    </SearchWrapper>
  );  
}

function getCuisineMatches ({ name }, searchInputValue) {
  return name.split(' ').filter((wordInName) => {
    const matchingPart = wordInName.slice(0, searchInputValue.length);
    return searchInputValue.toLowerCase() === matchingPart.toLowerCase();
  }).length > 0;
}

const SearchWrapper = styled.div`
  .option {
    cursor:pointer;
  }
`;

const SearchBarWrapper = styled.div`
`;
