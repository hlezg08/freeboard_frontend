import { useState, useEffect } from "react";
import InputComment from "../../../commons/inputs/comment";

import ButtonComment from "../../../commons/buttons/comment";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./MarketAnswerWrite.queries";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../list/MarketAnswerList.queries";
import * as S from "./MarketAnswerWrite.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object({
  contents: yup.string().required("내용은 필수 입력입니다."),
});
export default function MarketAnswerWrite(props: any) {
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );
  // const [answer, setAnswer] = useState("");
  const [length, setLength] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    if (props.isEdit) reset({ contents: props.el.contents });
  }, [props.el]);

  const onClickRollBack = () => {
    props.setIsEdit((prev) => !prev);
  };
  const onChangeAnswer = (event) => {
    setLength(event.target.value.length);
  };

  const onClickCreateAnswer = async (data) => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: props.el._id,
          createUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.el._id,
            },
          },
        ],
      });
      setIsVisible(false);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdateAnswer = async (data) => {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.answerId,
          updateUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
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
      props.setIsEdit(false);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <>
      <S.Form
        onSubmit={
          props.isEdit
            ? handleSubmit(onClickUpdateAnswer)
            : handleSubmit(onClickCreateAnswer)
        }
        isVisible={isVisible}
      >
        <InputComment
          register={register("contents")}
          onChange={onChangeAnswer}
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <S.CommentAttach>
          <span>{length}/100</span>
          <div>
            {props.isEdit && <S.RollBackButton onClick={onClickRollBack} />}
            <ButtonComment
              type="button"
              title={props.isEdit ? "수정" : "등록"}
            />
          </div>
        </S.CommentAttach>
      </S.Form>
    </>
  );
}
