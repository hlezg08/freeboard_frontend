import * as B from "./Board.styles";

export default function BoardUI(props) {
  return (
    <B.Wrapper>
      <B.TableWrapper>
        <B.TableHead>
          <B.Row>
            <th>No.</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>작성일</th>
          </B.Row>
        </B.TableHead>
        <tbody>
          {props.data?.fetchBoards.map((e, idx) => (
            <B.Row key={e._id}>
              <B.Column width="10%">{idx + 1}</B.Column>
              <B.Column
                id={e._id}
                width="50%"
                onClick={props.onClickMoveToDetail}
              >
                {e.title}
              </B.Column>
              <B.Column width="20%">{e.writer}</B.Column>
              <B.Column>{e.createdAt.slice(0, 10)}</B.Column>
            </B.Row>
          ))}
        </tbody>
      </B.TableWrapper>
      <B.Button onClick={props.onClickMoveToNew}>게시물 등록하기</B.Button>
    </B.Wrapper>
  );
}
