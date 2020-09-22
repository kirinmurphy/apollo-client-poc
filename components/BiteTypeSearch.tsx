import React, { useState } from 'react';
import styled from 'styled-components';

import { useBiteFilter } from '../utils/useBiteFilter';

import { BiteTypeOption } from './BiteTypeOption';

interface Props {
  biteTypes: {
    name: string;
    id: string | number;
  }[]
}

const FILTER_OPTION_NAME_ALL = 'All';

export function BiteSearch ({ biteTypes }: Props): JSX.Element {
  const { updateBiteType, clearBiteType } = useBiteFilter();

  const [searchInputValue, setSearchInputValue] = useState('');
  
  function handleChange ({ target: { value } }) {
    setSearchInputValue(value);
  }

  function handleKeypress ({ charCode }) {
    if ( charCode === 13 ) { submitSearch(searchInputValue); }
  }

  function submitSearch (newBiteType) {
    updateBiteType(newBiteType);
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
          Search
        </button>
      </SearchBarWrapper>

      {!searchInputValue && <BiteTypeOption 
        name={FILTER_OPTION_NAME_ALL} 
        onClick={clearBiteType} 
      />}
      
      {biteTypes
        .filter(biteType => getBiteTypeMatches(biteType, searchInputValue))
        .map(({ name }, index) => (
          <BiteTypeOption 
            key={index} 
            name={name} 
            onClick={() => submitSearch(name)} 
          />
        ))
      }
    </SearchWrapper>
  );  
}

function getBiteTypeMatches ({ name }, searchInputValue) {
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
