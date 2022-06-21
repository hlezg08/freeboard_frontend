export interface IMarketWriteProps {
  loading?: any;
  data?: any;
  isEdit?: boolean;
}
export interface IMarketWriteUIProps {
  data: any;
  register: any;
  handleSubmit: any;
  formState: any;
  setValue?: any;
  trigger: any;
  imageUrls: Array<string>;
  onChangeFiles: (fileUrl: string, index: number) => void;
  onClickSearchAddress: () => void;
  onCompleteSearchAddress: (data) => void;
  onClickCreateUseditem: (data) => void;
  onClickUpdateUseditem: (data) => void;
  isEdit: boolean;
  isModalVisible: boolean;
}
