import MarketDetail from "../../../src/components/units/market/detail/MarketDetail.container";
import MarketCommentList from "../../../src/components/units/marketComment/list/MarketCommentList.container";
import MarketCommentWrite from "../../../src/components/units/marketComment/write/MarketCommentWrite.container";
export default function MarketUseditemIdPage() {
  return (
    <>
      <MarketDetail />
      <MarketCommentWrite isEdit={false} />
      <MarketCommentList />
    </>
  );
}
