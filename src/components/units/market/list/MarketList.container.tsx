import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useState, useEffect, ChangeEvent } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import { FETCH_USED_ITEMS } from "./MarketList.queries";
import MarketListUI from "./MarketList.presenter";
import _ from "lodash";

export default function MarketList() {
  const router = useRouter();
  const { data, refetch, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const [todayProducts, setTodayProducts] = useState([]);
  // const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("products") || "[]");
    setTodayProducts(result);
  }, []);

  const getDebounce = _.debounce((data: string) => {
    refetch({ search: data, page: 1 });
    // onChangeKeyword(data);
  }, 200);

  // const onChangeKeyword = (value: string) => {
  //   setKeyword(value);
  // };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const onClickTodayProducts = (el) => () => {
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    const temp = products.filter((productsEl) => productsEl._id === el._id);

    // 한 번  담았던 데이터는 더이상 안들어가도록
    if (temp.length === 1) return;

    const { __typename, ...newEl } = el;
    products.unshift(newEl);

    const clickedAt = new Date();
    newEl.clickedAt = getDate(String(clickedAt));

    const filteredProducts = products.filter(
      (el) => getDate(String(new Date())) === getDate(String(clickedAt))
    );
    setTodayProducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));

    router.push(`/market/${el._id}`);
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

  return (
    <MarketListUI
      data={data}
      refetch={refetch}
      onClickTodayProducts={onClickTodayProducts}
      loadProducts={loadProducts}
      todayProducts={todayProducts}
      // keyword={keyword}
      onChangeSearch={onChangeSearch}
      // onChangeKeyword={onChangeKeyword}
    />
  );
}
