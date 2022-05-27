import * as D from "./BoardCommentWrite.styles";
import { Rate } from "antd";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <D.Wrapper>
      <D.CommentWrapper>
        <h3>댓글</h3>
        <D.CommentNotMemberWrapper>
          <D.CommentNotMemberInput
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
          ></D.CommentNotMemberInput>
          <D.CommentNotMemberInput
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          ></D.CommentNotMemberInput>
          <Rate
            onChange={props.setRating}
            allowHalf
            value={props.rating}
          ></Rate>
        </D.CommentNotMemberWrapper>
        <D.CommentTextarea
          onChange={props.onChangeContents}
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        ></D.CommentTextarea>
        <D.CommentAttach>
          <span>{props.length}/100</span>
          <D.CommentButton
            onClick={
              props.isEdit
                ? props.onClickUpdateComment
                : props.onClickCreateComment
            }
          >
            {props.isEdit ? "수정" : "등록"}
          </D.CommentButton>
        </D.CommentAttach>
      </D.CommentWrapper>
    </D.Wrapper>
  );
}
