import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query {
    fetchUseditems(page: 1) {
      _id
      name
      remarks
      tags
      price
      seller {
        name
      }
    }
  }
`;
