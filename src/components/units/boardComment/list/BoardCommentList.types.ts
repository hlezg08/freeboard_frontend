import { MouseEvent } from "react";
export interface IBoardCommentListUIProps {
  data?: any;
  onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
}
