import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useState } from "react";
import BoardListUI from "./BoardList.presenter";

export default function BoardList() {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQuery(FETCH_BOARDS_COUNT);

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  return (
    <>
      <BoardListUI
        data={data}
        refetch={refetch}
        refetchBoardsCount={refetchBoardsCount}
        keyword={keyword}
        onChangeKeyword={onChangeKeyword}
        count={dataBoardsCount?.fetchBoardsCount}
      ></BoardListUI>
    </>
  );
}
