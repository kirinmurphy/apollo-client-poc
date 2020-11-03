import { gql as gqlRequest } from 'graphql-request';

// using graphql-request, not apollo gql for this one
const CUISINES_QUERY = gqlRequest`
  query Cuisines {
    cuisines {
      id
      name
    }
  }
`;

export default CUISINES_QUERY;