import { gql } from "@apollo/client";
export const FETCH_USED_ITEMS_I_SOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      remarks
      price
      pickedCount
      createdAt
    }
  }
`;
export const FETCH_USED_ITEMS_COUNT_I_SOLD = gql`
  query {
    fetchUseditemsCountISold
  }
`;
export const FETCH_USED_ITEMS_I_BOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      _id
      name
      remarks
      price
      pickedCount
      createdAt
    }
  }
`;
export const FETCH_USED_ITEMS_COUNT_I_BOUGHT = gql`
  query {
    fetchUseditemsCountIBought
  }
`;
