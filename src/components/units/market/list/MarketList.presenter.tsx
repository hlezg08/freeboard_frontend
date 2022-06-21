import ButtonPink from "../../../commons/buttons/pink";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./MarketList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { Image } from "antd";

interface IMarketListUIProps {
  data?: any;
  loadProducts: () => void;
}
export default function MarketListUI(props: IMarketListUIProps) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper>
      <h1>상품 목록</h1>
      <S.ButtonWrapper>
        <ButtonPink
          title="상품 등록하기"
          onClick={onClickMoveToPage("/market/new")}
        ></ButtonPink>
      </S.ButtonWrapper>
      <S.BodyWrapper>
        <div style={{ width: "100%", height: "700px", overflow: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.loadProducts}
            hasMore={true || false}
            useWindow={false}
          >
            <S.ListWrapper>
              {props.data?.fetchUseditems.map((el: any, idx: number) => (
                <S.ListItemWrapper onClick={props.onClickPick(el)} key={el._id}>
                  <S.ImageWrapper>
                    {el.images[0] ? (
                      <Image
                        onError={(event) =>
                          (event.target.src = "../../images/error-image.png")
                        }
                        width={140}
                        height={140}
                        src={`https://storage.googleapis.com/${el.images[0]}`}
                      />
                    ) : (
                      <img
                        style={{ width: "140px", height: "140px" }}
                        src="../../images/error-image.png"
                      />
                    )}
                  </S.ImageWrapper>
                  <S.TextWrapper
                    onClick={onClickMoveToPage(`/market/${el._id}`)}
                  >
                    <S.ItemName>{el.name}</S.ItemName>
                    <S.ItemRemarks>{el.remarks}</S.ItemRemarks>
                    <S.ItemTags>{el.tags}</S.ItemTags>
                  </S.TextWrapper>
                  <S.PriceWrapper>
                    <S.PickIcon />
                    <S.ItemPrice>{el.price}원</S.ItemPrice>
                  </S.PriceWrapper>
                </S.ListItemWrapper>
              ))}
            </S.ListWrapper>
          </InfiniteScroll>
        </div>
        <S.TodayWrapper>
          <h2>오늘 본 상품</h2>

          {props.todayProducts?.map((el, index) => (
            <S.TodayItemWrapper key={index}>
              <S.TodayItemImg
                onError={(event) =>
                  (event.target.src = "../../images/error-image.png")
                }
                src={`https://storage.googleapis.com/${el.images[0]}`}
              />
              <S.DeleteIcon />
            </S.TodayItemWrapper>
          ))}
        </S.TodayWrapper>
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
