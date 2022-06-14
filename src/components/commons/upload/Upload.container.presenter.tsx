import * as S from "./Upload.styles";
import { IUploadProps } from "./Upload.types";
import { UPLOAD_FILE } from "./Upload.queries";
import { useRef, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { checkFileValidaton } from "../../../commons/libraries/fileValidation";
import { Modal } from "antd";

export default function Upload(props: IUploadProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const isValid = checkFileValidaton(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFiles(result.data.uploadFile.url, props.index);
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
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
          src={`https://storage.googleapis.com/${props.imageUrl}`}
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
