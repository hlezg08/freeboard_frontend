import { ChangeEvent } from "react";

export interface IBoardListUIProps {
  keyword?: string;
  data?: any;
  refetch?: any;
  refetchCount?: any;
  refetchBoardsCount?: any;
  count?: any;
  onChangeKeyword: (value: string) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
