import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($search: String, $page: Int) {
    fetchUseditems(isSoldout: false, search: $search, page: $page) {
      _id
      name
      remarks
      tags
      price
      pickedCount
      images
      seller {
        name
      }
    }
  }
`;
export const FETCH_USED_ITEMS_SOLD_OUT = gql`
  query fetchUseditems($search: String, $page: Int) {
    fetchUseditems(isSoldout: true, search: $search, page: $page) {
      _id
      name
      remarks
      tags
      price
      pickedCount
      images
      seller {
        name
      }
    }
  }
`;
export const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;
