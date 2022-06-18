import MarketCommentWriteUI from "./MarketCommentWrite.presenter";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { CREATE_USED_ITEM_QUESTION } from "./MarketCommentWrite.queries";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { FETCH_USED_ITEM_QUESTIONS } from "../list/MarketCommentList.queries";

export default function MarketCommentWrite(props) {
  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const [contents, setContents] = useState("");
  const [length, setLength] = useState(0);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    setLength(event.target.value.length);
  };

  const onClickUpdateQuestion = async () => {};
  const onClickCreateQuestion = async () => {
    try {
      await createUseditemQuestion({
        variables: {
          useditemId: router.query.useditemId,
          createUseditemQuestionInput: { contents },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      Modal.success({
        content: "댓글이 등록되었습니다.",
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <MarketCommentWriteUI
      isEdit={props.isEdit}
      setIsEdit={props.setIsEdit}
      length={length}
      onChangeContents={onChangeContents}
      onClickUpdateQuestion={onClickUpdateQuestion}
      onClickCreateQuestion={onClickCreateQuestion}
    ></MarketCommentWriteUI>
  );
}
