import BoardPaginationUI from "./BoardPagination.presenter";
import { useQuery } from "@apollo/client";
import { useState, MouseEvent } from "react";
import { FETCH_BOARDS_COUNT } from "./BoardPagination.queries";
import { IBoardPaginationProps } from "./BoardPagination.types";

export default function BoardPagination(props: IBoardPaginationProps) {
  const { data: countData } = useQuery(FETCH_BOARDS_COUNT);

  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil(countData?.fetchBoardsCount / 10);
  const [activedPage, setActivedPage] = useState(1);

  const onClickPage = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof Element) {
      setActivedPage(Number(event.target.id));
      props.refetch({ page: Number(event.target.id) });
    }
  };

  const onClickFirstPage = () => {
    setStartPage(1);
    props.refetch({ page: 1 });
    setActivedPage(1);
  };
  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
    setActivedPage(startPage - 10);
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
    setActivedPage(startPage + 10);
  };
  const onClickLastPage = () => {
    setStartPage(Math.floor(lastPage / 10) * 10 + 1);
    props.refetch({ page: lastPage });
    setActivedPage(lastPage);
  };

  return (
    <BoardPaginationUI
      activedPage={activedPage}
      startPage={startPage}
      lastPage={lastPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      onClickFirstPage={onClickFirstPage}
      onClickLastPage={onClickLastPage}
    ></BoardPaginationUI>
  );
}
