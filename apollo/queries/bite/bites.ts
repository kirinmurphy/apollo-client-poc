import gql from "graphql-tag";

const BITE_QUERY = gql`
  query Bites {
    bites {
      id
      name
      photo {
        url
      }
      bite_types {
        name
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
    }
  }
`;

export default BITE_QUERY;