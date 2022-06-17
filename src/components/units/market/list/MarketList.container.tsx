import MarketListUI from "./MarketList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS } from "./MarketList.queries";

export default function MarketList() {
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
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

  return <MarketListUI data={data} loadProducts={loadProducts} />;
}
