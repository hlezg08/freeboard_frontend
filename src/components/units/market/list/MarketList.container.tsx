import MarketListUI from "./MarketList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS } from "./MarketList.queries";
import { useState, useEffect } from "react";
import { getDate } from "../../../../commons/libraries/utils";
export default function MarketList() {
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const [todayProducts, setTodayProducts] = useState([]);
  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("products") || "[]");
    setTodayProducts(result);
  }, []);

  const onClickPick = (el) => () => {
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    const temp = products.filter((productsEl) => productsEl._id === el._id);

    // 한 번  담았던 데이터는 더이상 안들어가도록
    if (temp.length === 1) return;

    const { __typename, ...newEl } = el;
    products.unshift(newEl);

    const clickedAt = new Date();
    newEl.clickedAt = getDate(String(clickedAt));
    localStorage.setItem("products", JSON.stringify(products));

    const filteredProducts = products.filter(
      (el) => getDate(String(new Date())) === getDate(String(clickedAt))
    );
    setTodayProducts(filteredProducts);
    console.log(filteredProducts);
  };

  const loadProducts = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchUseditems.length / 10) + 1 },
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
      onClickPick={onClickPick}
      loadProducts={loadProducts}
      todayProducts={todayProducts}
    />
  );
}
