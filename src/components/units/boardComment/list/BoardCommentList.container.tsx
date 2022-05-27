import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { DELETE_BOARD_COMMENT } from "./BoardCommentList.queries";
import { FETCH_BOARD_COMMENTS } from "../write/BoardCommentWrite.queries";
import BoardCommentListUI from "./BoardCommentList.presenter";

export default function BoardCommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [id, setId] = useState("");
  const [commentPassword, setCommentPassword] = useState("");

  const showModal = (event: MouseEvent<HTMLButtonElement>) => {
    setIsModalVisible((prev) => !prev);
    setId(event.currentTarget.id);
  };

  const onChangeCommentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentPassword(event.target.value);
  };

  const onClickDeleteComment = async () => {
    console.log(id);
    try {
      await deleteBoardComment({
        variables: {
          password: commentPassword,
          boardCommentId: id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsModalVisible(false);
    } catch (error) {
      alert(error.message);
      setIsModalVisible(false);
    }
  };

  return (
    <BoardCommentListUI
      data={data}
      isModalVisible={isModalVisible}
      onClickDeleteComment={onClickDeleteComment}
      showModal={showModal}
      onChangeCommentPassword={onChangeCommentPassword}
    ></BoardCommentListUI>
  );
}
