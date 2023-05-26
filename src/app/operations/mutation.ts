import gql from 'graphql-tag';

export const registerData = gql`
    mutation MyMutation($input: Object!) {
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
