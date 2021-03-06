import gql from "graphql-tag";

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

const SOURCES_QUERY = gql`
  query Sources {
    sources { ...SourceContent }
  }
  ${GQL_FRAGMENT_SOURCES}
`;

export default SOURCES_QUERY;

export const SOURCE_WITH_BITES_BY_ID_QUERY = gql`
  query Source($id: ID!){
    source(id: $id) { 
      ...SourceContent 
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
  ${GQL_FRAGMENT_SOURCES}
`;
