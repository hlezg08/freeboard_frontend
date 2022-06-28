export interface IUploadProps {
  imageUrl?: string;
  imageUrls?: Array<string>;
  setImageUrls?: any;
  files?: Array<File | undefined>;
  setFiles?: any;
  index: number;
  onChangeFiles: (fileUrl: string, index: number) => void;
}
