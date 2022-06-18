import * as I from "./MarketCommentListItem.styles";
import { useState } from "react";
import { getDateTime } from "../../../../commons/libraries/utils";
import MarketCommentWrite from "../write/MarketCommentWrite.container";
import MarketAnswerWrite from "../../marketAnswer/write/MarketAnswerWrite.container";
import MarketAnswerList from "../../marketAnswer/list/MarketAnswerList.container";

export default function MarketCommentListUIItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [isActiveAnswer, setIsActiveAnswer] = useState(false);

  const onClickUpdateQuestions = () => {
    setIsEdit(true);
  };
  const onClickActiveAnswer = () => {
    setIsActiveAnswer((prev) => !prev);
  };
  return (
    <>
      {!isEdit && (
        <I.Wrapper>
          <I.Icon src="../../icons/ic-profile.svg" />
          <I.SubWrapper>
            <I.TextWrapper>
              <I.UserNameWrapper>
                <I.UserName>{props.el.user.name}</I.UserName>
                <I.ButtonWrapper>
                  <I.AnswerButton
                    id={props.el._id}
                    onClick={onClickActiveAnswer}
                  ></I.AnswerButton>
                  <I.CommentEditButton
                    id={props.el._id}
                    onClick={onClickUpdateQuestions}
                  ></I.CommentEditButton>
                  <I.CommentDeleteButton></I.CommentDeleteButton>
                </I.ButtonWrapper>
              </I.UserNameWrapper>

              <I.CommentContentsWrapper>
                <I.CommentContents>{props.el.contents}</I.CommentContents>
                <I.CommentDate>{getDateTime(props.el.createdAt)}</I.CommentDate>
              </I.CommentContentsWrapper>
            </I.TextWrapper>
            {isActiveAnswer && <MarketAnswerWrite _id={props.el._id} />}
            <MarketAnswerList _id={props.el._id} />
          </I.SubWrapper>
        </I.Wrapper>
      )}
      {isEdit && (
        <MarketCommentWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        ></MarketCommentWrite>
      )}
    </>
  );
}
