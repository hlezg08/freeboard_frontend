import { MouseEvent } from "react";
export interface IBoardListUIProps {
  onClickMoveToNew: () => void;
  onClickMoveToDetail: (event: MouseEvent) => void;
  data?: any;
}
