import { getDateTime } from "../../../../commons/libraries/utils";
import * as D from "./BoardCommentList.styles";
import { Modal } from "antd";
import { IBoardCommentListUIItemProps } from "../list/BoardCommentList.types";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import { useState } from "react";

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
        <D.CommentComponent>
          <D.Icon src="../../profile.svg"></D.Icon>
          <D.CommentTextWrapper>
            <D.CommentWriterWrapper>
              <div>
                <D.CommentWriter>{props.el.writer}</D.CommentWriter>
                <D.CommentRate
                  disabled
                  allowHalf
                  value={props.el.rating}
                ></D.CommentRate>
              </div>
              <D.CommentButtonWrapper>
                <D.CommentEditButton
                  id={props.el._id}
                  onClick={onClickUpdateComment}
                ></D.CommentEditButton>
                <D.CommentDeleteButton
                  id={props.el._id}
                  onClick={props.showModal}
                >
                  삭제
                </D.CommentDeleteButton>
              </D.CommentButtonWrapper>
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
            </D.CommentWriterWrapper>
            <D.CommentContentsWrapper>
              <span>{props.el.contents}</span>
            </D.CommentContentsWrapper>
            <D.CommentDate>{getDateTime(props.el.createdAt)}</D.CommentDate>
          </D.CommentTextWrapper>
        </D.CommentComponent>
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
