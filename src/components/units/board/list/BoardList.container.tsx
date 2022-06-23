import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useState, ChangeEvent } from "react";
import BoardListUI from "./BoardList.presenter";
import _ from "lodash";

export default function BoardList() {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount, refetch: refetchCount } =
    useQuery(FETCH_BOARDS_COUNT);

  const getDebounce = _.debounce((data: string) => {
    refetch({ search: data, page: 1 });
    refetchCount({ search: data });
    onChangeKeyword(data);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  return (
    <>
      <BoardListUI
        data={data}
        refetch={refetch}
        refetchCount={refetchCount}
        keyword={keyword}
        onChangeKeyword={onChangeKeyword}
        onChangeSearch={onChangeSearch}
        count={dataBoardsCount?.fetchBoardsCount}
      ></BoardListUI>
    </>
  );
}
