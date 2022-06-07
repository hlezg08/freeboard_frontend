import * as B from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import BoardPagination from "../../../commons/pagination/BoardPagination.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <>
      <B.Wrapper>
        <B.SearchWrapper>
          <B.SearchIcon src="../../icons/ic-search.svg" />
          <B.SearchInput
            type="text"
            onChange={props.onChangeSearch}
            placeholder="제목을 검색해주세요."
          />
        </B.SearchWrapper>
        <h1>리뷰게시판</h1>
        <B.TableWrapper>
          <B.TableHead>
            <B.Row>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>작성일</th>
            </B.Row>
          </B.TableHead>
          <B.TableBody>
            {props.data?.fetchBoards.map((e: any, idx: number) => (
              <B.Row key={e._id}>
                <B.Column width="10%">{idx + 1}</B.Column>
                <B.ColumnTitle
                  id={e._id}
                  width="50%"
                  onClick={props.onClickMoveToDetail}
                >
                  {e.title
                    .replace(props.keyword, `#$%${props.keyword}#$%`)
                    .split("#$%")
                    .map((el: any) => (
                      <B.MatchedWord
                        key={uuidv4()}
                        isMatched={props.keyword === el}
                      >
                        {el}
                      </B.MatchedWord>
                    ))}
                </B.ColumnTitle>
                <B.Column width="20%">{e.writer}</B.Column>
                <B.Column>{getDate(e.createdAt)}</B.Column>
              </B.Row>
            ))}
          </B.TableBody>
        </B.TableWrapper>
        <B.Footer>
          <BoardPagination refetch={props.refetch} />
          <B.Button onClick={props.onClickMoveToNew}>글쓰기</B.Button>
        </B.Footer>
      </B.Wrapper>
    </>
  );
}
