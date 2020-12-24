import { gql as gqlRequest } from 'graphql-request';

// using graphql-request, not apollo gql for this one
export const NEIGHBORHOOD_LIST_QUERY = gqlRequest`
  query Neighborhoods {
    neighborhoods {
      id
      name
    }
  }
`;
