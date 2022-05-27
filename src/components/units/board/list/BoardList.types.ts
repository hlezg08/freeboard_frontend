import { MouseEvent } from "react";
export interface IBoardListUIProps {
  data?: any;
  onClickMoveToNew: () => void;
  onClickMoveToDetail: (event: MouseEvent<HTMLElement>) => void;
}
