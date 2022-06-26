import { gql } from "@apollo/client";
export const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($page: Int) {
    fetchUseditemsIPicked(search: "", page: $page) {
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
export const FETCH_USED_ITEMS_COUNT_I_PICKED = gql`
  query {
    fetchUseditemsCountIPicked
  }
`;
