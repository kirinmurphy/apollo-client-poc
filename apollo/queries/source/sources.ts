import gql from "graphql-tag";

const SOURCES_QUERY = gql`
  query Sources {
    sources {
      id
      name
      location {
        latitude
        longitude
        neighborhood
      }
    }
  }
`;

export default SOURCES_QUERY;
