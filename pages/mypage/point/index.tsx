import { SyntheticEvent, useState } from "react";
import styled from "@emotion/styled";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../../../src/components/commons/tabs/TabPanel";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import MypageSidebar from "../../../src/components/units/mypage/sidebar/MypageSidebar.container";
import MyPagePointTotal from "../../../src/components/units/mypage/point/total/MyPagePointTotal.container";
import MyPagePointLoading from "../../../src/components/units/mypage/point/loading/MyPagePointLoading.container";
import MyPagePointBuying from "../../../src/components/units/mypage/point/buying/MyPagePointBuying.container";
import MyPagePointSelling from "../../../src/components/units/mypage/point/selling/MyPagePointSelling.container";

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

function MyPagePointPage() {
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
              <Tab label="전체 내역" {...a11yProps(0)} />
              <Tab label="충전 내역" {...a11yProps(1)} />
              <Tab label="구매 내역" {...a11yProps(2)} />
              <Tab label="판매 내역" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <MyPagePointTotal />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <MyPagePointLoading />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <MyPagePointBuying />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <MyPagePointSelling />
          </TabPanel>
        </Box>
      </Contents>
    </Wrapper>
  );
}

export default withAuth(MyPagePointPage);
