import { graphql } from "relay-runtime";

export const UsersQuery = graphql`
  query UsersQuery {
    users {
      _id: id
      name
      age
    }
  }
`;
