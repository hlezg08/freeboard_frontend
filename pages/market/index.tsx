import MarketList from "../../src/components/units/market/list/MarketList.container";
import styled from "@emotion/styled";
import MarketToday from "../../src/components/units/market/today/MarketToday.container";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
      <MarketToday todayProducts={todayProducts} />
    </Wrapper>
  );
}
