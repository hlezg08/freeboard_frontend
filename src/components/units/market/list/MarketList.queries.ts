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
