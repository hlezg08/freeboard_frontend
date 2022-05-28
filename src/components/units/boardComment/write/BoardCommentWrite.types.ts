import { ChangeEvent } from "react";
export interface IBoardCommentWriteProps {
  isEdit: boolean;
  el?: any;
  setIsEdit?: any;
  data?: any;
}
export interface IBoardCommentWriteUIProps {
  data?: any;
  isEdit: boolean;
  length: number;
  rating: number;
  setRating: any;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCreateComment: () => void;
  onClickUpdateComment: () => void;
  el?: any;
}
export interface IUpdateBoardCommentInput {
  contents?: string;
  rating?: number;
}
