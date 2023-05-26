import gql from 'graphql-tag';

export const registerData = gql`
    mutation MyMutation($input: UserInput!) {
      createUsers(input: $input) {
        id
        email
        firstName
        lastName
        contactNo
        address
        role
        status
        }
    }
`;
