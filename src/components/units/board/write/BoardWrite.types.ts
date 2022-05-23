import { ChangeEvent } from "react";
export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IBoardWriteUIProps {
  errorWriter: string;
  errorContents: string;
  errorPassword: string;
  errorTitle: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateBoard: () => void;
  onClickUpdateBoard: () => void;
  isEdit: boolean;
  isActive: boolean;
  data?: any;
}
export interface IUpdateBoardInput {
  writer?: string;
  title?: string;
  contents?: string;
  youtubeUrl?: string;
}
export interface ISubmitBtnProps {
  isActive: boolean;
}
