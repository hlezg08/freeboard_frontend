export interface IUploadProps {
  imageUrl?: any;
  index: number;
  onChangeFiles: (fileUrl: string, index: number) => void;
}
