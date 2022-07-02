import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./MarketWrite.queries";
import MarketWriteUI from "./MarketWrite.presenter";
import { IMarketWriteProps } from "./MarketWrite.types";
import { useRecoilState } from "recoil";
import { latLngState } from "../../../../commons/store";
import { IUpdateUseditemInput } from "../../../../commons/types/generated/types";
import { UPLOAD_FILE } from "../../../commons/upload/Upload.queries";

const schema = yup.object({
  name: yup.string().required("필수 입력 사항입니다."),
  remarks: yup.string().required("필수 입력 사항입니다."),
  contents: yup.string().required("필수 입력 사항입니다."),
  price: yup
    .number()
    .positive("양수만 입력 가능합니다.")
    .required("필수 입력 사항입니다.")
    .typeError("숫자만 입력 가능합니다."),
});

export default function MarketWrite(props: IMarketWriteProps) {
  const router = useRouter();
  const [latLng] = useRecoilState(latLngState);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const methods = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const [tags, setTags] = useState([]);
  const [imageUrls, setImageUrls] = useState<string[]>(["", "", ""]);
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    methods.reset({
      name: props.data?.fetchUseditem.name,
      remarks: props.data?.fetchUseditem.remarks,
      price: props.data?.fetchUseditem.price,
      contents: props.data?.fetchUseditem.contents,
    });
  }, [props.data]);

  const onClickSearchAddress = () => {
    setIsModalVisible((prev) => !prev);
  };
  const onCompleteSearchAddress = (data: any) => {
    methods.setValue("useditemAddress.zipcode", data.zonecode);
    methods.setValue("useditemAddress.address", data.address);
    setIsModalVisible((prev) => !prev);
  };

  // const onChangeFiles = (fileUrl: string, index: number) => {
  //   const newImageUrls = [...imageUrls];
  //   newImageUrls[index] = fileUrl;
  //   setImageUrls(newImageUrls);
  // };

  const onClickCreateUseditem = async (data) => {
    try {
      const resultUploadFile = await Promise.all(
        files.map((el) => el && uploadFile({ variables: { file: el } }))
      );
      const resultUrls = resultUploadFile.map((el) =>
        el ? el.data.uploadFile.url : ""
      );
      console.log(resultUrls);
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags,
            images: resultUrls,
            useditemAddress: {
              lat: latLng.Ma,
              lng: latLng.La,
              zipcode: data.useditemAddress.zipcode,
              address: data.useditemAddress.address,
              addressDetail: data.useditemAddress.addressDetail,
            },
          },
        },
      });
      Modal.success({
        content: "상품이 등록되었습니다.",
      });
      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  };

  const onClickUpdateUseditem = async (data) => {
    console.log(imageUrls);
    try {
      const resultUploadFile = await Promise.all(
        files.map((el) => el && uploadFile({ variables: { file: el } }))
      );
      const resultUrls = resultUploadFile.map((el) =>
        el ? el.data.uploadFile.url : ""
      );
      console.log(resultUrls);
      const updateUseditemInput: IUpdateUseditemInput = {};
      if (data.name) updateUseditemInput.name = data.name;
      if (data.remarks) updateUseditemInput.remarks = data.remarks;
      if (data.contents) updateUseditemInput.contents = data.contents;
      if (data.price) updateUseditemInput.price = Number(data.price);
      if (imageUrls) updateUseditemInput.images = resultUrls;
      if (tags) updateUseditemInput.tags = tags;

      if (
        data.useditemAddress.zipcode ||
        data.useditemAddress.address ||
        data.useditemAddress.addressDetail
      ) {
        updateUseditemInput.useditemAddress = {};
        if (data.useditemAddress.zipcode) {
          updateUseditemInput.useditemAddress.zipcode =
            data.useditemAddress.zipcode;
        }
        if (data.useditemAddress.address) {
          updateUseditemInput.useditemAddress.address =
            data.useditemAddress.address;
        }
        if (data.useditemAddress.addressDetail) {
          updateUseditemInput.useditemAddress.addressDetail =
            data.useditemAddress.addressDetail;
        }
      }

      const result = await updateUseditem({
        variables: {
          useditemId: router.query.useditemId,
          updateUseditemInput,
        },
      });
      Modal.success({
        content: "상품이 수정되었습니다.",
      });
      router.push(`/market/${result.data.updateUseditem._id}`);
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  };

  // 이미지 defaultValues
  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setImageUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  return (
    <MarketWriteUI
      methods={methods}
      data={props.data}
      tags={tags}
      setTags={setTags}
      files={files}
      setFiles={setFiles}
      address={methods.getValues("useditemAddress.address")}
      imageUrls={imageUrls}
      setImageUrls={setImageUrls}
      // onChangeFiles={onChangeFiles}
      onClickSearchAddress={onClickSearchAddress}
      onCompleteSearchAddress={onCompleteSearchAddress}
      isEdit={props.isEdit}
      onClickCreateUseditem={onClickCreateUseditem}
      onClickUpdateUseditem={onClickUpdateUseditem}
      isModalVisible={isModalVisible}
    />
  );
}
