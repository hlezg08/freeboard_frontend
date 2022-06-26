import { useQuery } from "@apollo/client";
import {
  FETCH_USED_ITEMS_I_SOLD,
  FETCH_USED_ITEMS_COUNT_I_SOLD,
} from "./MyPageMarketProduct.queries";
import * as S from "./MyPageMarketProduct.styles";
import { getDate } from "../../../../../commons/libraries/utils";
import BoardPagination from "../../../../commons/pagination/BoardPagination.container";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";

export default function MyPageMarketProduct() {
  const { data, refetch } = useQuery(FETCH_USED_ITEMS_I_SOLD);
  const { data: dataCount, refetch: refetchCount } = useQuery(
    FETCH_USED_ITEMS_COUNT_I_SOLD
  );
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.TableWrapper>
        <S.TableHead>
          <S.Row>
            <th>번호</th>
            <th>상품명</th>
            <th>가격</th>
            <th>작성일</th>
          </S.Row>
        </S.TableHead>
        <S.TableBody>
          {data?.fetchUseditemsISold.map((e: any, idx: number) => (
            <S.Row key={e._id}>
              <S.Column width="10%">{idx + 1}</S.Column>
              <S.ColumnTitle
                onClick={onClickMoveToPage(`/market/${e._id}`)}
                id={e._id}
                width="50%"
              >
                {e.name}
              </S.ColumnTitle>
              <S.Column width="20%">{e.price}</S.Column>
              <S.Column>{getDate(e.createdAt)}</S.Column>
            </S.Row>
          ))}
        </S.TableBody>
      </S.TableWrapper>
      <S.ButtonWrapper>
        <BoardPagination
          refetch={refetch}
          count={dataCount?.fetchUseditemsCountISold}
        />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
