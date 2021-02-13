import gql from "graphql-tag";
import { gql as gqlRequest } from "graphql-request";

export const sourceDefaultData = `
    id
    name
    cuisines {
      name
    }
    marqueeImage {
      url
    }
    location {
      latitude
      longitude
      phone
      neighborhood {
        name
        city {
          name
        }
      }
    }
    contactLinks {
      website
      facebook
      twitter
      instagram
    }
    deliveryOptions {
      available
      preferredMethod
      otherLink
    }
`;


export const SOURCE_WITH_BITES_BY_ID_QUERY = gqlRequest`
  query Source($id: ID!){
    source(id: $id) { 
      ${sourceDefaultData} 
      bites { 
        id
        name
        mealPreferences
        photo {
          url
        }
        cuisines {
          name
        }
      }
    } 
  }
`;


// still in use in (unused) bite detail
export const GQL_FRAGMENT_SOURCES = gql`
  fragment SourceContent on Source {
    id
    name
    cuisines {
      name
    }
    marqueeImage {
      url
    }
    location {
      latitude
      longitude
      phone
      neighborhood {
        name
        city {
          name
        }
      }
    }
    contactLinks {
      website
      facebook
      twitter
      instagram
    }
    deliveryOptions {
      available
      preferredMethod
      otherLink
    }
  }
`;

