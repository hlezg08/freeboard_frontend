import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { Modal } from "antd";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const onClickListBoard = () => {
    router.push(`/boards/`);
  };

  const onClickUpdateBoard = () => {
    router.push(`${router.query.boardId}/edit`);
  };

  const onClickDeleteBoard = async () => {
    try {
      await deleteBoard({
        variables: { boardId: router.query.boardId },
      });
      Modal.success({
        content: "게시물을 삭제했습니다!",
      });
      router.push(`/boards/`);
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  };

  const onClickLikeBoard = () => {
    likeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  const onClickDislikeBoard = () => {
    dislikeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  return (
    <BoardDetailUI
      data={data}
      onClickListBoard={onClickListBoard}
      onClickUpdateBoard={onClickUpdateBoard}
      onClickDeleteBoard={onClickDeleteBoard}
      onClickLikeBoard={onClickLikeBoard}
      onClickDislikeBoard={onClickDislikeBoard}
    />
  );
}