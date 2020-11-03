import gql from "graphql-tag";
import { gql as gqlRequest } from "graphql-request";

import { GQL_FRAGMENT_SOURCES } from "./sources";

const GQL_FRAGMENT_BITES = gql`
  fragment BiteContent on Bite {
    id
    name
    photo {
      url
    }
    source { ...SourceContent }
  }
  ${GQL_FRAGMENT_SOURCES}
`;

export const biteFragment = `
  id
  name
  photo {
    url
  }
  source {
    id
    name
    location {
      latitude
      longitude
      neighborhood
    }
  }
`;


export const BITE_BY_ID = gql`
  query Bite($id: ID!){
    bite(id: $id) { ...BiteContent } 
  }
  ${GQL_FRAGMENT_BITES}
`;

// _or query with graphQl has a bug in strapi code.  fixed in version 3.2.4, wtg for publish 
// https://github.com/strapi/strapi/pull/8332
// bites(where: { _or: { name_contains: $searchKeyword }, cuisines: { name: $searchKeyword } })
export const FILTERED_BITE_QUERY = gqlRequest`
  query Bites($searchKeyword: String!) {
    bites(where: { cuisines: { name: $searchKeyword } }) { 
      ${biteFragment} 
    }
  }
`;

export const BITE_QUERY = gqlRequest`
  query Bites { 
    bites { ${biteFragment} }
  }
`;
