import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "./BoardList.queries";
import { MouseEvent } from "react";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickMoveToNew = () => {
    router.push(`/boards/new`);
  };
  const onClickMoveToDetail = (event: MouseEvent<HTMLElement>) => {
    console.log((event.target as HTMLElement).id);
    router.push(`/boards/${(event.target as HTMLElement).id}`);
  };
  return (
    <BoardListUI
      onClickMoveToNew={onClickMoveToNew}
      onClickMoveToDetail={onClickMoveToDetail}
      data={data}
    ></BoardListUI>
  );
}
