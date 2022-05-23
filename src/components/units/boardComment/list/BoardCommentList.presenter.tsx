import { getDateTime } from "../../../../commons/libraries/utils";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import * as D from "./BoardCommentList.styles";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <D.CommentWrapper>
      {props.data?.fetchBoardComments.map((e: any) => (
        <D.CommentComponent key={e._id}>
          <D.Icon src="../../profile.svg"></D.Icon>
          <D.CommentTextWrapper>
            <D.CommentWriterWrapper>
              <span>{e.writer}</span>
              <D.CommentRate allowHalf value={e.rating}></D.CommentRate>
            </D.CommentWriterWrapper>
            <D.CommentContentsWrapper>
              <span>{e.contents}</span>
            </D.CommentContentsWrapper>
            <D.CommentDate>{getDateTime(e.createdAt)}</D.CommentDate>
          </D.CommentTextWrapper>
          <D.CommentButton>수정</D.CommentButton>
          <D.CommentButton id={e._id} onClick={props.onClickDeleteComment}>
            삭제
          </D.CommentButton>
        </D.CommentComponent>
      ))}
    </D.CommentWrapper>
  );
}
