import { SyntheticEvent, useState } from "react";
import styled from "@emotion/styled";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../../../src/components/commons/tabs/TabPanel";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import MypageSidebar from "../../../src/components/units/mypage/sidebar/MypageSidebar.container";
import MyPageMarketPick from "../../../src/components/units/mypage/market/pick/MyPageMarketPick.container";
import MyPageMarketProduct from "../../../src/components/units/mypage/market/product/MyPageMarketProduct.container";
import MyPageMarketBuy from "../../../src/components/units/mypage/market/buy/MyPageMarketBuy.container";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 80px;
`;
const Contents = styled.div`
  width: 100%;
`;

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function MyPageMarketPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <MypageSidebar />
      <Contents>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              TabIndicatorProps={{ style: { background: "#e9998a" } }}
              textColor="inherit"
              value={value}
              onChange={handleChange}
              aria-label="mypage market tabs"
            >
              <Tab label="나의 상품" {...a11yProps(0)} />
              <Tab label="구매 내역" {...a11yProps(1)} />
              <Tab label="찜한 상품" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <MyPageMarketProduct />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <MyPageMarketBuy />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <MyPageMarketPick />
          </TabPanel>
        </Box>
      </Contents>
    </Wrapper>
  );
}
// // 로그인이 필요할 때 === 토큰 있는지 확인 후 마이페이지 렌더링
export default withAuth(MyPageMarketPage);
