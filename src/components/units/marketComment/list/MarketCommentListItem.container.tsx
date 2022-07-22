import * as I from "./MarketCommentListItem.styles";
import { useState } from "react";
import { getDateTime } from "../../../../commons/libraries/utils";
import MarketCommentWrite from "../write/MarketCommentWrite.container";
import MarketAnswerWrite from "../../marketAnswer/write/MarketAnswerWrite.container";
import MarketAnswerList from "../../marketAnswer/list/MarketAnswerList.container";
import { useMutation } from "@apollo/client";
import {
  FETCH_USED_ITEM_QUESTIONS,
  DELETE_USED_ITEM_QUESTION,
} from "./MarketCommentList.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../../marketAnswer/list/MarketAnswerList.queries";

export default function MarketCommentListItem(props: any) {
  const router = useRouter();
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const [isEdit, setIsEdit] = useState(false);
  const [isActiveAnswer, setIsActiveAnswer] = useState(false);

  const onClickUpdateQuestions = () => {
    setIsEdit(true);
  };
  const onClickActiveAnswer = () => {
    setIsActiveAnswer((prev) => !prev);
  };
  const onClickDeleteQuestion = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.el._id },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {!isEdit && (
        <I.Wrapper>
          <I.Icon src="../../icons/ic-profile.svg" />
          <I.TextWrapper>
            <I.UserNameWrapper>
              <I.UserName>{props.el.user.name}</I.UserName>
              <I.ButtonWrapper>
                <I.AnswerButton
                  id={props.el._id}
                  onClick={onClickActiveAnswer}
                />
                <I.CommentEditButton
                  id={props.el._id}
                  onClick={onClickUpdateQuestions}
                />
                <I.CommentDeleteButton onClick={onClickDeleteQuestion} />
              </I.ButtonWrapper>
            </I.UserNameWrapper>

            <I.CommentContentsWrapper>
              <I.CommentContents>{props.el.contents}</I.CommentContents>
              <I.CommentDate>{getDateTime(props.el.createdAt)}</I.CommentDate>
            </I.CommentContentsWrapper>
          </I.TextWrapper>
        </I.Wrapper>
      )}
      {isEdit && (
        <MarketCommentWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        ></MarketCommentWrite>
      )}
      {isActiveAnswer && <MarketAnswerWrite el={props.el} />}
      <MarketAnswerList
        onClickActiveAnswer={onClickActiveAnswer}
        _id={props.el._id}
      />
    </>
  );
}
