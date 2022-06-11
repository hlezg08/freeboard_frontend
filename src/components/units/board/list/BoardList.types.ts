import { ChangeEvent, MouseEvent } from "react";
export interface IBoardListUIProps {
  keyword?: string;
  data?: any;
  refetch?: any;
  refetchBoardsCount?: any;
  count?: any;
  onChangeKeyword: (value: string) => void;
  onClickMoveToNew: () => void;
  onClickMoveToDetail: (event: MouseEvent<HTMLElement>) => void;
}
