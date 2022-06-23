import ButtonPink from "../../../commons/buttons/pink";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./MarketList.styles";
import InfiniteScroll from "react-infinite-scroller";
import Searchbar from "../../../commons/searchbar/Searchbar.container";
import { IMarketListUIProps } from "./MarketList.types";
import MarketListItem from "./MarketListItem.container";
import { v4 as uuid4 } from "uuid";
export default function MarketListUI(props: IMarketListUIProps) {
  const { onClickMoveToPage } = useMoveToPage();

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

      <S.BodyWrapper
        style={{ width: "100%", height: "700px", overflow: "auto" }}
      >
        <InfiniteScroll
          pageStart={0}
          loadMore={props.loadProducts}
          hasMore={true || false}
          useWindow={false}
        >
          <S.ListWrapper>
            {props.data?.fetchUseditems.map((el: any) => (
              <MarketListItem
                key={uuid4()}
                el={el}
                onClickTodayProducts={props.onClickTodayProducts}
              />
            ))}
          </S.ListWrapper>
        </InfiniteScroll>
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
