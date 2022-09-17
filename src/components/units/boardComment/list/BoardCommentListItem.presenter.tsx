import { getDateTime } from "../../../../commons/libraries/utils";
import { useState, useRef, useEffect } from "react";
import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import * as I from "./BoardCommentListItem.styles";
import { Modal } from "antd";

export default function BoardCommentListUIItem(
  props: IBoardCommentListUIItemProps
) {
  const [isEdit, setIsEdit] = useState(false);
  const onClickUpdateComment = () => {
    setIsEdit(true);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <>
      {!isEdit && (
        <I.CommentItemWrapper>
          <I.Icon src="../../icons/ic-profile.svg" />
          <I.CommentTextWrapper>
            <I.CommentWriterWrapper>
              {/* 댓글 작성자, 별점 */}
              <div>
                <I.CommentWriter>{props.el.writer}</I.CommentWriter>
                <I.CommentRate
                  disabled
                  allowHalf
                  value={props.el.rating}
                ></I.CommentRate>
              </div>

              {/* 수정,삭제 버튼 */}
              <I.CommentButtonWrapper>
                <I.CommentEditButton
                  id={props.el._id}
                  onClick={onClickUpdateComment}
                ></I.CommentEditButton>
                <I.CommentDeleteButton
                  id={props.el._id}
                  onClick={props.showModal}
                ></I.CommentDeleteButton>
              </I.CommentButtonWrapper>
            </I.CommentWriterWrapper>

            {props.isModalVisible && (
              <Modal
                visible={true}
                onOk={props.onClickDeleteComment}
                onCancel={props.showModal}
              >
                비밀번호 입력:
                <input
                  ref={inputRef}
                  type="password"
                  onChange={props.onChangeCommentPassword}
                />
              </Modal>
            )}

            {/* 댓글 내용, 작성 날짜 */}
            <I.CommentContentsWrapper>
              <I.CommentContents>{props.el.contents}</I.CommentContents>
              <I.CommentDate>{getDateTime(props.el.createdAt)}</I.CommentDate>
            </I.CommentContentsWrapper>
          </I.CommentTextWrapper>
        </I.CommentItemWrapper>
      )}
      {isEdit && (
        <BoardCommentWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        ></BoardCommentWrite>
      )}
    </>
  );
}
