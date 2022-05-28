import { getDateTime } from "../../../../commons/libraries/utils";
import { useState } from "react";
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

  return (
    <>
      {!isEdit && (
        <I.CommentItemWrapper>
          <I.Icon src="../../img/profile.svg" />
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

              {/* 비밀번호 입력 모달창 */}
              {props.isModalVisible && (
                <Modal
                  visible={true}
                  onOk={props.onClickDeleteComment}
                  onCancel={props.showModal}
                >
                  비밀번호 입력:
                  <input
                    type="password"
                    onChange={props.onChangeCommentPassword}
                  />
                </Modal>
              )}
            </I.CommentWriterWrapper>

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
          data={props.data}
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        ></BoardCommentWrite>
      )}
    </>
  );
}
