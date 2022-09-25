import MarketList from "../../src/components/units/market/list/MarketList.container";
import styled from "@emotion/styled";
import MarketToday from "../../src/components/units/market/today/MarketToday.container";
import { useState, useEffect } from "react";
import { breakPoints } from "../../src/commons/styles/media";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
`;
const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const SidebarWrapper = styled.div`
  padding-top: 1.875rem;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export default function MarketPage() {
  const [todayProducts, setTodayProducts] = useState([]);

  useEffect(() => {
    const todayProducts = JSON.parse(localStorage.getItem("products") || "[]");
    setTodayProducts(todayProducts);
  }, []);

  return (
    <Wrapper>
      <DetailWrapper>
        <MarketList></MarketList>
      </DetailWrapper>
      <SidebarWrapper>
        <MarketToday todayProducts={todayProducts} />
      </SidebarWrapper>
    </Wrapper>
  );
}
