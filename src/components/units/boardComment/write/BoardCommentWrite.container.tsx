import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  FETCH_BOARD_COMMENTS,
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";

export default function BoardCommentWrite(props) {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);
  const [length, setLength] = useState(0);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    setLength(event.target.value.length);
  };

  const onClickCreateComment = async () => {
    try {
      await createBoardComment({
        variables: {
          boardId: router.query.boardId,
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickUpdateComment = async () => {
    try {
      await updateBoardComment({
        variables: {
          boardCommentId: props.el._id,
          password,
          updateBoardCommentInput: {
            contents,
            rating,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit(false);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <BoardCommentWriteUI
      isEdit={props.isEdit}
      length={length}
      rating={rating}
      setRating={setRating}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickCreateComment={onClickCreateComment}
      onClickUpdateComment={onClickUpdateComment}
    ></BoardCommentWriteUI>
  );
}
