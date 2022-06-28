import { ChangeEvent } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./MarketToday.styles";
interface IMarketTodayProps {
  todayProducts?: any;
}

export default function MarketToday(props: IMarketTodayProps) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.TodayWrapper>
      <h2>오늘 본 상품</h2>
      {props.todayProducts?.slice(0, 3).map((el, index) => (
        <S.TodayItemWrapper key={index}>
          <S.TodayItemImg
            onError={(event: ChangeEvent<HTMLImageElement>) =>
              (event.target.src = "../../images/error-image.png")
            }
            src={`https://storage.googleapis.com/${el.images[0]}`}
            onClick={onClickMoveToPage(`/market/${el._id}`)}
          />
        </S.TodayItemWrapper>
      ))}
    </S.TodayWrapper>
  );
}
