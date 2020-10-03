import gql from 'graphql-tag';

export const GQL_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { identifier:$email, password:$password }) {
      user {
        email
      }
      jwt
    }
  }
`;
