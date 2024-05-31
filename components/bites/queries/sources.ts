import gql from "graphql-tag";

// Corrected fragment for Strapi v4
export const GQL_FRAGMENT_SOURCES = gql`
  fragment SourceContent on SourceEntityResponse {
    data {
      id
      attributes {
        name
        cuisines {
          data {
            id
            attributes {
              name
            }
          }
        }
        marqueeImage {
          data {
            attributes {
              url
            }
          }
        }
        location {
          latitude
          longitude
          phone
          neighborhood {
            data {
              id
              attributes {
                name
                city {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
              }
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
    }
  }
`;

// Corrected SOURCES_QUERY for Strapi v4
const SOURCES_QUERY = gql`
  query Sources {
    sources {
      data {
        id
        attributes {
          ...SourceContent
        }
      }
    }
  }
  ${GQL_FRAGMENT_SOURCES}
`;

export default SOURCES_QUERY;

// Corrected SOURCE_WITH_BITES_BY_ID_QUERY for Strapi v4
export const SOURCE_WITH_BITES_BY_ID_QUERY = gql`
  query Source($id: ID!) {
    source(id: $id) {
      data {
        id
        attributes {
          name
          cuisines {
            data {
              id
              attributes {
                name
              }
            }
          }
          marqueeImage {
            data {
              attributes {
                url
              }
            }
          }
          location {
            latitude
            longitude
            phone
            neighborhood {
              data {
                id
                attributes {
                  name
                  city {
                    data {
                      id
                      attributes {
                        name
                      }
                    }
                  }
                }
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
          bites {
            data {
              id
              attributes {
                title
                cuisines {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
