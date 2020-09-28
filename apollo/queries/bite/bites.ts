import gql from "graphql-tag";

const biteContent = `
  {
    id
    name
    photo {
      url
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
`;

export const BITE_BY_ID = gql`
  query Bite($id: ID!){
    bite(id: $id) {
      id
      name
    } 
  }
`;

export const FILTERED_BITE_QUERY = gql`
  query Bites {
    bites(where: { cuisine: { id: 1 } }) ${biteContent}  
  }
`;

export const BITE_QUERY = gql`
  query Bites { 
    bites ${biteContent} 
  }
`;
