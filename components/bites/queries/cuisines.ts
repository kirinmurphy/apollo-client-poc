import gql from "graphql-tag";

const CUISINES_QUERY = gql`
  query Cuisines {
    cuisines {
      id
      name
    }
  }
`;

export default CUISINES_QUERY;