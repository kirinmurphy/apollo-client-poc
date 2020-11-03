import { gql as gqlRequest } from "graphql-request";
import { biteFragment } from "./bites";

export const USER_IMPRESSIONS_QUERY = gqlRequest`
  query Impressions {
    impressions {
      id
      type
      bite { ${biteFragment} }
    }
  }
`;
