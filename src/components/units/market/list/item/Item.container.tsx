import * as S from "./Item.styles";
import { ChangeEvent, useState } from "react";
import moment from "moment";
import "moment/locale/ko";
import { getDate } from "../../../../../commons/libraries/utils";
import { useRouter } from "next/router";

interface IMarketListItemProps {
  item?: any;
}
export default function Item({ item }: IMarketListItemProps) {
  const [, setTodayProducts] = useState([]);

  const router = useRouter();

  const onClickTodayProducts = () => {
    router.push(`market/${item._id}`);
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    const temp = products.filter((productsEl) => productsEl._id === item._id);

    if (temp.length === 1) return;

    const { __typename, ...newEl } = item;
    products.unshift(newEl);

    const clickedAt = new Date();
    newEl.clickedAt = getDate(String(clickedAt));

    const filteredProducts = products.filter(
      (_) => getDate(String(new Date())) === getDate(String(clickedAt))
    );
    setTodayProducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
  };

  return (
    <S.Wrapper onClick={onClickTodayProducts}>
      <S.ImageWrapper>
        {item.images[0] ? (
          <img
            style={{ width: "100%", height: "221px" }}
            onError={(event: ChangeEvent<HTMLImageElement>) => {
              if (event.target instanceof Element) {
                event.target.src = "../../images/error-image.png";
              }
            }}
            src={`https://storage.googleapis.com/${item.images[0]}`}
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
          <S.Content1Text>{item.name}</S.Content1Text>
          <S.PickFalseIcon />
        </S.TextDetailWrapper>
        <S.TextDetailWrapper>
          <S.Content1Text>{item.price}원</S.Content1Text>
          <S.Content2Text>
            {moment(item.createdAt).endOf("minute").fromNow()}
          </S.Content2Text>
        </S.TextDetailWrapper>
      </S.TextWrapper>
    </S.Wrapper>
  );
}
