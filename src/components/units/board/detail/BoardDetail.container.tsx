import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
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
      if (confirm("정말 삭제하시겠습니까?")) {
        await deleteBoard({
          variables: { boardId: router.query.boardId },
        });
        alert("삭제되었습니다.");
        router.push(`/boards/`);
      }
    } catch (error) {
      alert(error.message);
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
