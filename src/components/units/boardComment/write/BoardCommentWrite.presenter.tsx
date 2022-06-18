import * as D from "./BoardCommentWrite.styles";
import { Rate } from "antd";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";
import ButtonComment from "../../../commons/buttons/comment";
import InputComment from "../../../commons/inputs/comment";
export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  const onClickRollBack = () => {
    props.setIsEdit((prev) => !prev);
  };
  return (
    <D.Wrapper>
      <D.CommentWrapper isEdit={props.isEdit}>
        {props.isEdit || <D.CommentTitle>댓글</D.CommentTitle>}
        <D.CommentNotMemberWrapper>
          <D.CommentNotMemberInput
            type="text"
            placeholder="작성자"
            defaultValue={props.el?.writer}
            readOnly={props.isEdit}
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
            value={props.rating || props.el?.rating}
          ></Rate>
          {props.isEdit && <D.RollBackButton onClick={onClickRollBack} />}
        </D.CommentNotMemberWrapper>
        <InputComment
          onChange={props.onChangeContents}
          maxLength={100}
          defaultValue={props.el?.contents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <D.CommentAttach>
          <span>{props.length}/100</span>
          <ButtonComment
            onClick={
              props.isEdit
                ? props.onClickUpdateComment
                : props.onClickCreateComment
            }
            title={props.isEdit ? "수정" : "등록"}
          />
        </D.CommentAttach>
      </D.CommentWrapper>
    </D.Wrapper>
  );
}
