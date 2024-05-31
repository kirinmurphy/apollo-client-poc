import gql from "graphql-tag";
import { gql as gqlRequest } from "graphql-request";

import { GQL_FRAGMENT_SOURCES } from "./sources";

// Updated Bite Fragment
const GQL_FRAGMENT_BITES = gql`
  fragment BiteContent on BiteEntityResponse {
    data {
      id
      attributes {
        title
        source {
          data {
            ...SourceContent
          }
        }
      }
    }
  }
  ${GQL_FRAGMENT_SOURCES}
`;

// Updated biteFragment string
export const biteFragment = `
  data {
    id
    attributes {
      title
      source {
        data {
          id
          attributes {
            name
            location {
              latitude
              longitude
              neighborhood {
                data {
                  id 
                  attributes {
                    name
                  }  
                }
              }
            }
          }
        }
      }
    }
  }
`;

// Updated BITE_BY_ID query
export const BITE_BY_ID = gql`
  query Bite($id: ID!) {
    bite(id: $id) {
      ...BiteContent
    }
  }
  ${GQL_FRAGMENT_BITES}
`;

// Updated FILTERED_BITE_QUERY
export const FILTERED_BITE_QUERY = gqlRequest`
  query Bites($searchKeyword: String!) {
    bites(filters: { cuisines: { name: { eq: $searchKeyword } } }) {
      ${biteFragment}
    }
  }
`;

// Updated BITE_QUERY
export const BITE_QUERY = gqlRequest`
  query Bites {
    bites {
      ${biteFragment}
    }
  }
`;
