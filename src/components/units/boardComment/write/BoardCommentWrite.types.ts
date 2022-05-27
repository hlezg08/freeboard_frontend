import { ChangeEvent } from "react";

export interface IBoardCommentWriteUIProps {
  isEdit: boolean;
  length: number;
  rating: number;
  setRating: any;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCreateComment: () => void;
  onClickUpdateComment: () => void;
}
