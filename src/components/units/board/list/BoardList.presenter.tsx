import * as B from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import BoardPagination from "../../../commons/pagination/BoardPagination.container";
import { v4 as uuidv4 } from "uuid";
import Searchbar from "../../../commons/searchbar/Searchbar.container";
import ButtonPink from "../../../commons/buttons/pink";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

export default function BoardListUI(props: IBoardListUIProps) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <B.Wrapper>
        <Searchbar
          refetch={props.refetch}
          refetchCount={props.refetchCount}
          onChangeKeyword={props.onChangeKeyword}
          onChangeSearch={props.onChangeSearch}
        />
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
                <B.Column width="10%">{e._id.slice(-4)}</B.Column>
                <B.ColumnTitle
                  id={e._id}
                  width="50%"
                  onClick={onClickMoveToPage(`/boards/${e._id}`)}
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
          <BoardPagination refetch={props.refetch} count={props.count} />
          <B.ButtonWrapper>
            <ButtonPink
              title="글쓰기"
              onClick={onClickMoveToPage("/boards/new")}
            />
          </B.ButtonWrapper>
        </B.Footer>
      </B.Wrapper>
    </>
  );
}
