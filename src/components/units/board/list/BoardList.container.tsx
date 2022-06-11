import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { MouseEvent, useState } from "react";
import BoardListUI from "./BoardList.presenter";

export default function BoardList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQuery(FETCH_BOARDS_COUNT);

  const onClickMoveToNew = () => {
    router.push(`/boards/new`);
  };
  const onClickMoveToDetail = (event: MouseEvent<HTMLElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards/${event.currentTarget.id}`);
  };
  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  return (
    <>
      <BoardListUI
        data={data}
        refetch={refetch}
        refetchBoardsCount={refetchBoardsCount}
        onClickMoveToNew={onClickMoveToNew}
        onClickMoveToDetail={onClickMoveToDetail}
        keyword={keyword}
        onChangeKeyword={onChangeKeyword}
        count={dataBoardsCount?.fetchBoardsCount}
      ></BoardListUI>
    </>
  );
}
