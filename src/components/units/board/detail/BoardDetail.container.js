import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  //날짜 포맷 정리
  const createdAt = data?.fetchBoard.createdAt
    .replace("T", " ")
    .replace(/\..*/, "");

  const onClickUpdateBoard = () => {
    router.push(`${router.query.boardId}/edit`);
  };
  const onClickDeleteBoard = () => {
    //console.log(router.query.boardId);
    deleteBoard({
      variables: { boardId: router.query.boardId },
    });
    alert("삭제되었습니다!");
    router.push(`/boards`);
  };
  return (
    <BoardDetailUI
      data={data}
      createdAt={createdAt}
      onClickUpdateBoard={onClickUpdateBoard}
      onClickDeleteBoard={onClickDeleteBoard}
    />
  );
}
