import { gql as gqlRequest } from 'graphql-request';

// Updated CUISINES_QUERY for Strapi v4
const CUISINES_QUERY = gqlRequest`
  query Cuisines {
    cuisines {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

export default CUISINES_QUERY;
