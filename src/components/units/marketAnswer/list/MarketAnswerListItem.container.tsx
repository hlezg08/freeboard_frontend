import { Modal } from "antd";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { getDateTime } from "../../../../commons/libraries/utils";
import { BsArrowReturnRight } from "react-icons/bs";
import styled from "@emotion/styled";
import * as I from "../../marketComment/list/MarketCommentListItem.styles";
import {
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  DELETE_USED_ITEM_QUESTION_ANSWER,
} from "./MarketAnswerList.queries";
import MarketAnswerWrite from "../write/MarketAnswerWrite.container";
const Wrapper = styled.div`
  height: auto;
  padding: 10px 0px 0px 20px;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: flex-start;
`;
export default function MarketAnswerListItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );

  const onClickDeleteAnswer = async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.questionId,
            },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const onClickActiveUpdateAnswer = () => {
    setIsEdit(true);
  };

  return (
    <>
      {!isEdit && (
        <Wrapper key={props.el._id}>
          <BsArrowReturnRight style={{ width: "30px", height: "18px" }} />
          <I.Icon src="../../icons/ic-profile.svg" />
          <I.TextWrapper>
            <I.UserNameWrapper>
              <I.UserName>{props.el.user.name}</I.UserName>
              <I.ButtonWrapper>
                <I.AnswerButton onClick={props.onClickActiveAnswer} />
                <I.CommentEditButton onClick={onClickActiveUpdateAnswer} />
                <I.CommentDeleteButton onClick={onClickDeleteAnswer} />
              </I.ButtonWrapper>
            </I.UserNameWrapper>

            <I.CommentContentsWrapper>
              <I.CommentContents>{props.el.contents}</I.CommentContents>

              <I.CommentDate>{getDateTime(props.el.createdAt)}</I.CommentDate>
            </I.CommentContentsWrapper>
          </I.TextWrapper>
        </Wrapper>
      )}
      {isEdit && (
        <MarketAnswerWrite
          el={props.el}
          questionId={props.questionId}
          answerId={props.el._id}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      )}
    </>
  );
}
