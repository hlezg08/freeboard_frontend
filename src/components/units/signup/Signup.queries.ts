import { gql } from "@apollo/client";
export const CREATE_USER = gql`
  mutation ($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;
