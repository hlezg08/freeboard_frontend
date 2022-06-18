export interface IMarketWriteProps {
  loading?: any;
  data?: any;
  isEdit: boolean;
}
export interface IMarketWriteUIProps {
  register: any;
  handleSubmit: any;
  formState: any;
  setValue?: any;
  getValues?: any;
  trigger: any;
  imageUrls: string[];
  zipcode: string;
  address: string;
  onChangeFiles: (fileUrl: string, index: number) => void;
  onClickCreateUseditem: (data) => void;
  onClickUpdateUseditem: (data) => void;
  isEdit: boolean;
}
