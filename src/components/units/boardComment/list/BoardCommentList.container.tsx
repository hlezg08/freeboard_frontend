import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { DELETE_BOARD_COMMENT } from "./BoardCommentList.queries";
import { FETCH_BOARD_COMMENTS } from "../write/BoardCommentWrite.queries";
import BoardCommentListUI from "./BoardCommentList.presenter";

export default function BoardCommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onClickDeleteComment = async (event: MouseEvent<HTMLButtonElement>) => {
    const password = prompt("비밀번호를 입력하세요");
    try {
      await deleteBoardComment({
        variables: { password, boardCommentId: event.target.id },
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
  return (
    <BoardCommentListUI
      data={data}
      onClickDeleteComment={onClickDeleteComment}
    ></BoardCommentListUI>
  );
}
