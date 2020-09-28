import React from 'react';
import styled from 'styled-components';

import { GridList } from '../styles/globalCss'; 

import { 
  BITE_QUERY, 
  FILTERED_BITE_QUERY
} from '../apollo/queries/bite/bites';

import { Bite } from '../components/Bite';
import Query from './Query';
import { useCuisineFilter } from '../utils/useCuisineFilter';

export function BiteList (): JSX.Element {

  const { cuisineTypeFromUrl } = useCuisineFilter();

  const query = !!cuisineTypeFromUrl ? FILTERED_BITE_QUERY : BITE_QUERY;
  const variables = !!cuisineTypeFromUrl ? { cuisineName: cuisineTypeFromUrl } : {};

  return (
    <GridList>
      <Query query={query} variables={variables}>
        {({ data }) => {

          const { bites = [] } = data;

          console.log('bites', data);

          return (
            <>
              {bites.map((itemProps, index) => {
                return <React.Fragment key={index}>
                  <BiteTheme><Bite {...itemProps} /></BiteTheme>
                </React.Fragment>
              })}
            </>
          );
        }}
      </Query>
    </GridList>
  );
}

const BiteTheme = styled.div`
  .bite-summary__name {
    font-size:.9rem;
    font-weight:bold;
  }

  .bite-summary__source {
    font-size:.8rem;
  }
`;
