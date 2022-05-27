import BoardPaginationUI from "./BoardPagination.presenter";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { FETCH_BOARDS_COUNT } from "./BoardPagination.queries";
interface IBoardPaginationProps {
  data?: any;
  refetch?: any;
}
export default function BoardPagination(props: IBoardPaginationProps) {
  const { data: countData } = useQuery(FETCH_BOARDS_COUNT);

  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil(countData?.fetchBoardsCount / 10);

  const onClickPage = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof Element)
      props.refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };
  return (
    <BoardPaginationUI
      startPage={startPage}
      lastPage={lastPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    ></BoardPaginationUI>
  );
}
