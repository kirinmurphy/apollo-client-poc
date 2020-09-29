import gql from "graphql-tag";

export const GQL_FRAGMENT_SOURCES = gql`
  fragment SourceContent on Source {
    id
    name
    location {
      latitude
      longitude
      neighborhood
    }
  }
`;

const SOURCES_QUERY = gql`
  query Sources {
    sources { ...SourceContent }
  }
  ${GQL_FRAGMENT_SOURCES}
`;

export default SOURCES_QUERY;
