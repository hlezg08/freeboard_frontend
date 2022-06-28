import MarketCommentWriteUI from "./MarketCommentWrite.presenter";
import { useState, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./MarketCommentWrite.queries";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { FETCH_USED_ITEM_QUESTIONS } from "../list/MarketCommentList.queries";
interface IUpdateUseditemQuestionInput {
  contents?: string;
}
const schema = yup.object({
  contents: yup.string().required("내용은 필수 입력입니다."),
});
export default function MarketCommentWrite(props) {
  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [length, setLength] = useState(0);
  const { register, handleSubmit, formState, getValues, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [submited, setSubmited] = useState(false);

  useEffect(() => {
    reset({ contents: "" });
  }, [submited]);

  useEffect(() => {
    if (props.isEdit) reset({ contents: props.el?.contents });
  }, [props.el]);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    // setContents(event.target.value);
    setLength(event.target.value.length);
  };

  const onClickCreateQuestion = async (data) => {
    try {
      await createUseditemQuestion({
        variables: {
          useditemId: router.query.useditemId,
          createUseditemQuestionInput: { contents: data.contents },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      setSubmited(true);
      Modal.success({
        content: "댓글이 등록되었습니다.",
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdateQuestion = async (data) => {
    try {
      const updateUseditemQuestionInput: IUpdateUseditemQuestionInput = {};
      if (data.contents) updateUseditemQuestionInput.contents = data.contents;
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: props.el._id,
          updateUseditemQuestionInput,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      Modal.success({ content: "수정되었습니다." });
      props.setIsEdit(false);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <MarketCommentWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      getValues={getValues}
      isEdit={props.isEdit}
      setIsEdit={props.setIsEdit}
      length={length}
      onChangeContents={onChangeContents}
      onClickUpdateQuestion={onClickUpdateQuestion}
      onClickCreateQuestion={onClickCreateQuestion}
    ></MarketCommentWriteUI>
  );
}
