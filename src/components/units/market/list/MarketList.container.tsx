import { useQuery } from "@apollo/client";
import { ChangeEvent } from "react";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_SOLD_OUT,
} from "./MarketList.queries";
import MarketListUI from "./MarketList.presenter";
import _ from "lodash";

export default function MarketList() {
  const { data, refetch, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const {
    data: dataSoldOut,
    refetch: refetchSoldOut,
    fetchMore: fetchMoreSoldOut,
  } = useQuery(FETCH_USED_ITEMS_SOLD_OUT);

  const getDebounce = _.debounce((data: string) => {
    refetch({ search: data, page: 1 });
    refetchSoldOut({ search: data, page: 1 });
    // onChangeKeyword(data);
  }, 200);

  // const onChangeKeyword = (value: string) => {
  //   setKeyword(value);
  // };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const loadProducts = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  };
  const loadProductsSoldOut = () => {
    if (!dataSoldOut) return;
    fetchMoreSoldOut({
      variables: {
        page: Math.ceil(dataSoldOut.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <MarketListUI
      data={data}
      refetch={refetch}
      dataSoldOut={dataSoldOut}
      refetchSoldOut={refetchSoldOut}
      loadProducts={loadProducts}
      loadProductsSoldOut={loadProductsSoldOut}
      onChangeSearch={onChangeSearch}
    />
  );
}
