import MarketListUI from "./MarketList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS } from "./MarketList.queries";

export default function MarketList() {
  const { data, refetch } = useQuery(FETCH_USED_ITEMS);

  return <MarketListUI data={data} refetch={refetch} />;
}
