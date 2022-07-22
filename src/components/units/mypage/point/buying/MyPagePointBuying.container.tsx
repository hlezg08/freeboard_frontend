import * as S from "../../MyPage.styles";
import { useQuery } from "@apollo/client";
import { getDate } from "../../../../../commons/libraries/utils";
import { FETCH_POINT_TRANSACTIONS_OF_BUYING } from "../MyPagePoint.queries";
export default function MyPagePointBuying() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_BUYING);
  //   const { data: dataCount, refetch: refetchCount } = useQuery(
  //     FETCH_USED_ITEMS_COUNT_I_SOLD
  //   );

  return (
    <S.Wrapper>
      <S.TableWrapper>
        <S.TableHead>
          <S.Row>
            <th>번호</th>
            <th>내용</th>
            <th>금액</th>
            <th>잔액</th>
            <th>날짜</th>
          </S.Row>
        </S.TableHead>
        <S.TableBody>
          {data?.fetchPointTransactionsOfBuying.map((e: any, idx: number) => (
            <S.Row key={e._id}>
              <S.Column width="10%">{idx + 1}</S.Column>
              <S.ColumnTitle id={e._id}>{e.status}</S.ColumnTitle>
              <S.Column>{e.amount}</S.Column>
              <S.Column>{e.balance}</S.Column>
              <S.Column>{getDate(e.createdAt)}</S.Column>
            </S.Row>
          ))}
        </S.TableBody>
      </S.TableWrapper>
      <S.ButtonWrapper>
        {/* <BoardPagination
          refetch={refetch}
          count={dataCount?.fetchUseditemsCountISold}
        /> */}
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
