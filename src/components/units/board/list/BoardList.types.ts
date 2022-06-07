import { ChangeEvent, MouseEvent } from "react";
export interface IBoardListUIProps {
  keyword?: string;
  data?: any;
  refetch?: any;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickMoveToNew: () => void;
  onClickMoveToDetail: (event: MouseEvent<HTMLElement>) => void;
}
