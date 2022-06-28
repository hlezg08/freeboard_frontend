import MarketDetail from "../../../src/components/units/market/detail/MarketDetail.container";
import MarketCommentList from "../../../src/components/units/marketComment/list/MarketCommentList.container";
import MarketCommentWrite from "../../../src/components/units/marketComment/write/MarketCommentWrite.container";
import styled from "@emotion/styled";
import MarketToday from "../../../src/components/units/market/today/MarketToday.container";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEM_QUESTIONS } from "../../../src/components/units/marketComment/list/MarketCommentList.queries";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const SidebarWrapper = styled.div`
  padding-top: 30px;
`;
export default function MarketUseditemIdPage() {
  const [todayProducts, setTodayProducts] = useState([]);
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.useditemId },
  });
  useEffect(() => {
    const todayProducts = JSON.parse(localStorage.getItem("products") || "[]");
    setTodayProducts(todayProducts);
  }, []);

  return (
    <Wrapper>
      <DetailWrapper>
        <MarketDetail />
        <MarketCommentWrite isEdit={false} />
        {data?.fetchUseditemQuestions.length !== 0 && <MarketCommentList />}
      </DetailWrapper>
      <SidebarWrapper>
        <MarketToday todayProducts={todayProducts} />
      </SidebarWrapper>
    </Wrapper>
  );
}
