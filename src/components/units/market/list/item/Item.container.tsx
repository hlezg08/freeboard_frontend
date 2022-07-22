import * as S from "./Item.styles";
import { ChangeEvent, useState } from "react";
import moment from "moment";
import "moment/locale/ko";
import { getDate } from "../../../../../commons/libraries/utils";
import { useRouter } from "next/router";

interface IMarketListItemProps {
  el?: any;
}
export default function Item(props: IMarketListItemProps) {
  const [, setTodayProducts] = useState([]);

  const router = useRouter();

  const onClickTodayProducts = () => {
    router.push(`market/${props.el._id}`);
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    const temp = products.filter(
      (productsEl) => productsEl._id === props.el._id
    );

    // 한 번  담았던 데이터는 더이상 안들어가도록
    if (temp.length === 1) return;

    const { __typename, ...newEl } = props.el;
    products.unshift(newEl);

    const clickedAt = new Date();
    newEl.clickedAt = getDate(String(clickedAt));

    const filteredProducts = products.filter(
      (el) => getDate(String(new Date())) === getDate(String(clickedAt))
    );
    setTodayProducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
  };

  return (
    <S.Wrapper onClick={onClickTodayProducts}>
      <S.ImageWrapper>
        {props.el.images[0] ? (
          <img
            style={{ width: "100%", height: "221px" }}
            onError={(event: ChangeEvent<HTMLImageElement>) => {
              if (event.target instanceof Element) {
                event.target.src = "../../images/error-image.png";
              }
            }}
            src={`https://storage.googleapis.com/${props.el.images[0]}`}
          />
        ) : (
          <img
            style={{ width: "100%", height: "221px" }}
            src="../../images/error-image.png"
          />
        )}
      </S.ImageWrapper>
      <S.TextWrapper>
        <S.TextDetailWrapper>
          <S.Content1Text>{props.el.name}</S.Content1Text>
          <S.PickFalseIcon />
        </S.TextDetailWrapper>
        {/* {isPicked && <S.PickTrueIcon onClick={onClickPick(props.el)} />} */}
        <S.TextDetailWrapper>
          <S.Content1Text>{props.el.price}원</S.Content1Text>
          <S.Content2Text>
            {moment(props.el.createdAt).endOf("minute").fromNow()}
          </S.Content2Text>
        </S.TextDetailWrapper>
      </S.TextWrapper>
    </S.Wrapper>
  );
}
