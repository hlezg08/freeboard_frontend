import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "./BoardList.queries";
import { MouseEvent } from "react";
import BoardListUI from "./BoardList.presenter";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const onClickMoveToNew = () => {
    router.push(`/boards/new`);
  };
  const onClickMoveToDetail = (event: MouseEvent<HTMLElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards/${event.target.id}`);
  };

  return (
    <>
      <BoardListUI
        data={data}
        refetch={refetch}
        onClickMoveToNew={onClickMoveToNew}
        onClickMoveToDetail={onClickMoveToDetail}
      ></BoardListUI>
    </>
  );
}
