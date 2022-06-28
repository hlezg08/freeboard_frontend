import MarketList from "../../src/components/units/market/list/MarketList.container";
import styled from "@emotion/styled";
import MarketToday from "../../src/components/units/market/today/MarketToday.container";
import { useState, useEffect } from "react";

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
  padding-top: 30px;
  /* position: fixed;
  top: 20%;
  right: 0%; */
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
