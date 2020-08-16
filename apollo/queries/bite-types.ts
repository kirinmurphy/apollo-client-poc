import gql from "graphql-tag";

const BITE_TYPES_QUERY = gql`
  query BiteTypes {
    biteTypes {
      id
      name
    }
  }
`;

export default BITE_TYPES_QUERY;