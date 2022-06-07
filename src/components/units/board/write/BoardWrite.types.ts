import { ChangeEvent } from "react";
export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}
export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: Array<string>;
}
export interface IBoardWriteUIProps {
  imageUrls: Array<string>;
  errorWriter: string;
  errorContents: string;
  errorPassword: string;
  errorTitle: string;
  onChangeInputs: (event: ChangeEvent<HTMLElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFiles: (fileUrl: string, index: number) => void;
  onClickCreateBoard: () => void;
  onClickUpdateBoard: () => void;
  onClickSearchAddress: () => void;
  onCompleteSearchAddress: (data: any) => void;
  data?: any;
  isEdit: boolean;
  isActive: boolean;
  isModalVisible: boolean;
  zipcode?: string;
  address?: string;
  addressDetail?: string;
}

export interface ISubmitBtnProps {
  isActive: boolean;
}
