import * as B from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import BoardPagination from "../../../commons/pagination/BoardPagination.container";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <>
      <B.Wrapper>
        <h1>Review</h1>
        <B.TableWrapper>
          <B.TableHead>
            <B.Row>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>작성일</th>
            </B.Row>
          </B.TableHead>
          <tbody>
            {props.data?.fetchBoards.map((e: any, idx: number) => (
              <B.Row key={e._id}>
                <B.Column width="10%">{idx + 1}</B.Column>
                <B.ColumnTitle
                  id={e._id}
                  width="50%"
                  onClick={props.onClickMoveToDetail}
                >
                  {e.title}
                </B.ColumnTitle>
                <B.Column width="20%">{e.writer}</B.Column>
                <B.Column>{getDate(e.createdAt)}</B.Column>
              </B.Row>
            ))}
          </tbody>
        </B.TableWrapper>
        <B.Footer>
          <BoardPagination refetch={props.refetch} />
          <B.Button onClick={props.onClickMoveToNew}>글쓰기</B.Button>
        </B.Footer>
      </B.Wrapper>
    </>
  );
}
