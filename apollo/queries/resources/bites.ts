import gql from "graphql-tag";
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

export const BITE_BY_ID = gql`
  query Bite($id: ID!){
    bite(id: $id) { ...BiteContent } 
  }
  ${GQL_FRAGMENT_BITES}
`;

export const FILTERED_BITE_QUERY = gql`
  query Bites($cuisineName: String!) {
    bites(where: { cuisines: { name: $cuisineName } }) {
      ...BiteContent
    }  
  }
  ${GQL_FRAGMENT_BITES}
`;

export const BITE_QUERY = gql`
  query Bites { 
    bites { ...BiteContent }
  }
  ${GQL_FRAGMENT_BITES}
`;
