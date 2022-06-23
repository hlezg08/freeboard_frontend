import { useMutation } from "@apollo/client";
import { Image } from "antd";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { TOGGLE_USED_ITEM_PICK } from "./MarketList.queries";
import * as S from "./MarketList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

interface IMarketListItemProps {
  el?: any;
}

export default function MarketListItem(props: IMarketListItemProps) {
  const [isPicked, setIsPicked] = useState(false);
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [todayProducts, setTodayProducts] = useState([]);
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("products") || "[]");
    setTodayProducts(result);
  }, []);

  const onClickTodayProducts = (el) => () => {
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    const temp = products.filter((productsEl) => productsEl._id === el._id);

    // 한 번  담았던 데이터는 더이상 안들어가도록
    if (temp.length === 1) return;

    const { __typename, ...newEl } = el;
    products.unshift(newEl);

    const clickedAt = new Date();
    newEl.clickedAt = getDate(String(clickedAt));

    const filteredProducts = products.filter(
      (el) => getDate(String(new Date())) === getDate(String(clickedAt))
    );
    setTodayProducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    router.push(`market/${el._id}`);
    // onClick={onClickMoveToPage(`market/${props.el._id}`)}
  };

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
    <S.ListItemWrapper onClick={onClickTodayProducts(props.el)}>
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
      <S.TextWrapper onClick={onClickMoveToPage(`market/${props.el._id}`)}>
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
