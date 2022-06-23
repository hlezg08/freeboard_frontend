import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchBoardComments($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      tags
      price
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
