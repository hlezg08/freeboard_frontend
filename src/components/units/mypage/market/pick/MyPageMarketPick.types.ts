import { gql } from "@apollo/client";
export const FETCH_USED_ITEMS_I_PICKED = gql`
  query {
    fetchUseditemsIPicked(search: "") {
      _id
      name
      price
      seller {
        name
      }
      createdAt
    }
  }
`;
