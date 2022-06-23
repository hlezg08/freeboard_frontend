import { useMutation } from "@apollo/client";
import { Image } from "antd";
import { useState } from "react";
import { TOGGLE_USED_ITEM_PICK } from "./MarketList.queries";
import * as S from "./MarketList.styles";

interface IMarketListItemProps {
  el?: any;
  onClickTodayProducts: (el) => () => void;
}
export default function MarketListItem(props: IMarketListItemProps) {
  const [isPicked, setIsPicked] = useState(false);
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const onClickPick = (el) => async () => {
    try {
      const result = await toggleUseditemPick({
        variables: {
          useditemId: el._id,
        },
      });
      console.log(result.data?.toggleUseditemPick);
      setIsPicked((prev) => !prev);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <S.ListItemWrapper>
      <S.ImageWrapper>
        {props.el.images[0] ? (
          <Image
            onError={(event) =>
              (event.target.src = "../../images/error-image.png")
            }
            width={140}
            height={140}
            src={`https://storage.googleapis.com/${props.el.images[0]}`}
          />
        ) : (
          <img
            style={{ width: "140px", height: "140px" }}
            src="../../images/error-image.png"
          />
        )}
      </S.ImageWrapper>
      <S.TextWrapper onClick={props.onClickTodayProducts(props.el)}>
        <S.ItemName>{props.el.name}</S.ItemName>
        <S.ItemRemarks>{props.el.remarks}</S.ItemRemarks>
        <S.ItemTags>{props.el.tags}</S.ItemTags>
      </S.TextWrapper>
      <S.PriceWrapper>
        {isPicked ? (
          <S.PickTrueIcon onClick={onClickPick(props.el)} />
        ) : (
          <S.PickFalseIcon onClick={onClickPick(props.el)} />
        )}
        <S.ItemPrice>{props.el.price}원</S.ItemPrice>
      </S.PriceWrapper>
    </S.ListItemWrapper>
  );
}
