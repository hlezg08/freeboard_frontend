import { useEffect } from "react";
import ButtonPink from "../../../commons/buttons/pink";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./MarketList.styles";

export default function MarketListUI(props) {
  const { onClickMoveToPage } = useMoveToPage();
  console.log(props.data);
  return (
    <S.Wrapper>
      <h1>상품 목록</h1>
      <S.BodyWrapper>
        {props.data?.fetchUseditems.map((el: any, idx: number) => (
          <S.BodyItemWrapper key={el._id}>
            <S.ImageWrapper></S.ImageWrapper>
            <S.TextWrapper>
              <S.ItemName>{el.name}</S.ItemName>
              <S.ItemRemarks>{el.remarks}</S.ItemRemarks>
              <S.ItemTags>{el.tags}</S.ItemTags>
            </S.TextWrapper>
            <S.PriceWrapper>
              <S.ItemPrice>{el.price}원</S.ItemPrice>
            </S.PriceWrapper>
          </S.BodyItemWrapper>
        ))}
      </S.BodyWrapper>
      <S.ButtonWrapper>
        <ButtonPink
          title="상품 등록하기"
          onClick={onClickMoveToPage("/market/new")}
        ></ButtonPink>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
