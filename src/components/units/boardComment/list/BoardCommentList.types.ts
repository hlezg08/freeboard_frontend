import { ChangeEvent, MouseEvent } from "react";
export interface IBoardCommentListUIProps {
  data?: any;
  isModalVisible: boolean;
  showModal: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
}
export interface IBoardCommentListUIItemProps {
  key: string;
  el: any;
  data?: any;
  isModalVisible: boolean;
  showModal: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
}
