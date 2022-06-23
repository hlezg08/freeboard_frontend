import MarketDetail from "../../../src/components/units/market/detail/MarketDetail.container";
import MarketCommentList from "../../../src/components/units/marketComment/list/MarketCommentList.container";
import MarketCommentWrite from "../../../src/components/units/marketComment/write/MarketCommentWrite.container";
import styled from "@emotion/styled";
import MarketToday from "../../../src/components/units/market/today/MarketToday.container";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export default function MarketUseditemIdPage() {
  const [todayProducts, setTodayProducts] = useState([]);

  useEffect(() => {
    const todayProducts = JSON.parse(localStorage.getItem("products") || "[]");
    setTodayProducts(todayProducts);
  }, []);

  return (
    <Wrapper>
      <DetailWrapper>
        <MarketDetail />
        <MarketCommentWrite isEdit={false} />
        <MarketCommentList />
      </DetailWrapper>
      <MarketToday todayProducts={todayProducts} />
    </Wrapper>
  );
}
