export interface IMarketWriteProps {
  loading?: any;
  data?: any;
  isEdit?: boolean;
}
export interface IMarketWriteUIProps {
  methods: any;
  data: any;
  tags?: Array<string>;
  setTags?: any;
  files?: Array<File | undefined>;
  setFiles?: any;
  imageUrls: Array<string>;
  setImageUrls: any;
  address?: string;
  onChangeFiles: (fileUrl: string, index: number) => void;
  onClickSearchAddress: () => void;
  onCompleteSearchAddress: (data) => void;
  onClickCreateUseditem: (data) => void;
  onClickUpdateUseditem: (data) => void;
  isEdit: boolean;
  isModalVisible: boolean;
}
