import { useState } from "react";
import InputComment from "../../../commons/inputs/comment";
import styled from "@emotion/styled";
import ButtonComment from "../../../commons/buttons/comment";
import { CREATE_USED_ITEM_QUESTION_ANSWER } from "./MarketAnswerWrite.queries";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
const CommentAttach = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
`;
export default function MarketAnswerWrite(props) {
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [answer, setAnswer] = useState("");
  const [length, setLength] = useState(0);
  const onChangeAnswer = (event) => {
    setAnswer(event.target.value);
    setLength(event.target.value.length);
  };
  const onClickCreateAnswer = async () => {
    try {
      const result = await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: props._id,
          createUseditemQuestionAnswerInput: {
            contents: answer,
          },
        },
      });
      console.log(result);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <>
      <InputComment
        onChange={onChangeAnswer}
        maxLength={100}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      />
      <CommentAttach>
        <span>{length}/100</span>
        <div>
          <ButtonComment onClick={onClickCreateAnswer} title="등록" />
        </div>
      </CommentAttach>
    </>
  );
}
