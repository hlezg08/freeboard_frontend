import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { Modal } from "antd";

export default function BoardCommentList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [commentPassword, setCommentPassword] = useState("");

  const showModal = (event: MouseEvent<HTMLButtonElement>) => {
    setIsModalVisible((prev) => !prev);
    setCommentId(event.currentTarget.id);
  };

  const onChangeCommentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentPassword(event.target.value);
  };

  const onClickDeleteComment = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: commentPassword,
          boardCommentId: commentId,
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
      Modal.error({
        content: error.message,
      });
      setIsModalVisible(false);
    }
  };

  const loadComment = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult?.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <BoardCommentListUI
      data={data}
      isModalVisible={isModalVisible}
      onClickDeleteComment={onClickDeleteComment}
      showModal={showModal}
      onChangeCommentPassword={onChangeCommentPassword}
      loadComment={loadComment}
    ></BoardCommentListUI>
  );
}
