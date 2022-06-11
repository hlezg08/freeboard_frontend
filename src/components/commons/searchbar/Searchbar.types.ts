import { ChangeEvent } from "react";
export interface ISearchbarProps {
  refetch?: any;
  refetchBoardsCount?: any;
  onChangeKeyword: (data: string) => void;
}
export interface ISearchbarUIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
