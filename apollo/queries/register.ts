import gql from 'graphql-tag';

export const GQL_REGISTER = gql`
  mutation Register($email: String!, $password: String!) {
    register(input: { username:$email, email:$email, password:$password }) {
      user {
        username,
        email
      },
      jwt
    }
  }
`;
