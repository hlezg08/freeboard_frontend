import * as S from "./Upload.styles";
import { IUploadProps } from "./Upload.types";
import { useRef, ChangeEvent } from "react";
import { checkFileValidaton } from "../../../commons/libraries/fileValidation";

export default function Upload(props: IUploadProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const isValid = checkFileValidaton(file);
    if (!isValid) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        // 브라우저에서만 보이는 URL
        const tempUrls = [...props.imageUrls];
        tempUrls[props.index] = data.target?.result;
        props.setImageUrls(tempUrls);

        const tempFiles = [...props.files];
        tempFiles[props.index] = file;
        props.setFiles(tempFiles);
      }
    };
  };
  const onClickFile = () => {
    fileRef.current?.click();
  };
  return (
    <>
      <S.ImageInput
        type="file"
        ref={fileRef}
        onChange={onChangeFile}
        accept=".jpg,.png"
      />
      {props.imageUrl ? (
        <S.Image
          src={
            props.isEdit
              ? `https://storage.googleapis.com/${props.imageUrl}`
              : `${props.imageUrl}`
          }
          onClick={onClickFile}
        />
      ) : (
        <S.ImageSelectButton type="button" onClick={onClickFile}>
          Upload
        </S.ImageSelectButton>
      )}
    </>
  );
}
