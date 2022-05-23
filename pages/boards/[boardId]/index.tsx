import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";
export default function BoardsBoardIdPage() {
  return (
    <>
      <BoardDetail></BoardDetail>
      <BoardCommentWrite></BoardCommentWrite>
      <BoardCommentList></BoardCommentList>
    </>
  );
}
