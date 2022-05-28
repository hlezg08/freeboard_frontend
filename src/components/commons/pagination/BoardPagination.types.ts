import { MouseEvent } from "react";
export interface IBoardPaginationProps {
  data?: any;
  refetch?: any;
}
export interface IBoardPaginationUIProps {
  startPage: number;
  lastPage: number;
  onClickPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  onClickFirstPage: () => void;
  onClickLastPage: () => void;
}
