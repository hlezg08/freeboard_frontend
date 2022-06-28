import { v4 as uuid4 } from "uuid";
import { useState, SyntheticEvent } from "react";
import * as S from "./MarketList.styles";
import InfiniteScroll from "react-infinite-scroller";
import Searchbar from "../../../commons/searchbar/Searchbar.container";
import ButtonPink from "../../../commons/buttons/pink";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { IMarketListUIProps } from "./MarketList.types";
import TabPanel from "../../../commons/tabs/TabPanel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "./item/Item.container";
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MarketListUI(props: IMarketListUIProps) {
  const { onClickMoveToPage } = useMoveToPage();
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <S.Wrapper>
      <h1>상품 목록</h1>
      <S.SearchBarButtonWrapper>
        <Searchbar
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
          onChangeSearch={props.onChangeSearch}
        />
        <ButtonPink
          title="상품 등록하기"
          onClick={onClickMoveToPage("/market/new")}
        ></ButtonPink>
      </S.SearchBarButtonWrapper>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            TabIndicatorProps={{ style: { background: "#e9998a" } }}
            textColor="inherit"
            value={value}
            onChange={handleChange}
            aria-label="mypage market tabs"
          >
            <Tab label="판매 중인 상품" {...a11yProps(0)} />
            <Tab label="판매 완료 상품" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <S.BodyWrapper
            style={{ width: "100%", height: "900px", overflow: "auto" }}
          >
            <InfiniteScroll
              pageStart={0}
              loadMore={props.loadProducts}
              hasMore={true || false}
              useWindow={false}
            >
              <S.GridWrapper>
                {props.data?.fetchUseditems.map((el: any) => (
                  <S.GridItemWrapper key={uuid4()}>
                    <Item el={el} />
                  </S.GridItemWrapper>
                ))}
              </S.GridWrapper>
            </InfiniteScroll>
          </S.BodyWrapper>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <S.BodyWrapper
            style={{ width: "100%", height: "900px", overflow: "auto" }}
          >
            <InfiniteScroll
              pageStart={0}
              loadMore={props.loadProductsSoldOut}
              hasMore={true || false}
              useWindow={false}
            >
              <S.GridWrapper>
                {props.dataSoldOut?.fetchUseditems.map((el: any) => (
                  <S.GridItemWrapper key={uuid4()}>
                    <Item el={el} />
                  </S.GridItemWrapper>
                ))}
              </S.GridWrapper>
            </InfiniteScroll>
          </S.BodyWrapper>
        </TabPanel>
      </Box>
    </S.Wrapper>
  );
}
