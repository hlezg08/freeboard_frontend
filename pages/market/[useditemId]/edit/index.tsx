import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM } from "../../../../src/components/units/market/detail/MarketDetail.queries";
import MarketWrite from "../../../../src/components/units/market/write/MarketWrite.container";
export default function BoardsBoardIdEditPage() {
  const router = useRouter();
  const { data, loading } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  return loading ? <p></p> : <MarketWrite isEdit={true} data={data} />;
}
