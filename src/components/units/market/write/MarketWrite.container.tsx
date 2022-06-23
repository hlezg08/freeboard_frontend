import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MarketWriteUI from "./MarketWrite.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./MarketWrite.queries";
import { IUpdateUseditemInput } from "../../../../commons/types/generated/types";
import { IMarketWriteProps } from "./MarketWrite.types";
import { useRecoilState } from "recoil";
import { latLngState } from "../../../../commons/store";

const schema = yup.object({
  name: yup.string().required("필수 입력 사항입니다."),
  remarks: yup.string().required("필수 입력 사항입니다."),
  contents: yup.string().required("필수 입력 사항입니다."),
  price: yup
    .number()
    .required("필수 입력 사항입니다.")
    .typeError("숫자만 입력 가능합니다."),
});

export default function MarketWrite(props: IMarketWriteProps) {
  const router = useRouter();
  const [latLng] = useRecoilState(latLngState);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    getValues,
    trigger,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [imageUrls, setImageUrls] = useState<string[]>(["", "", ""]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    reset({
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
    setValue("useditemAddress.zipcode", data.zonecode);
    setValue("useditemAddress.address", data.address);
    setIsModalVisible((prev) => !prev);
  };

  const onChangeFiles = (fileUrl: string, index: number) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = fileUrl;
    setImageUrls(newImageUrls);
  };

  const onClickCreateUseditem = async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            images: imageUrls,
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
    try {
      const updateUseditemInput: IUpdateUseditemInput = {};
      if (data.name) updateUseditemInput.name = data.name;
      if (data.remarks) updateUseditemInput.remarks = data.remarks;
      if (data.contents) updateUseditemInput.contents = data.contents;
      if (data.price) updateUseditemInput.price = Number(data.price);
      if (imageUrls) updateUseditemInput.images = imageUrls;

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
      data={props.data}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      setValue={setValue}
      address={getValues("useditemAddress.address")}
      getValues={getValues}
      trigger={trigger}
      imageUrls={imageUrls}
      isEdit={props.isEdit}
      onChangeFiles={onChangeFiles}
      onClickSearchAddress={onClickSearchAddress}
      onCompleteSearchAddress={onCompleteSearchAddress}
      onClickCreateUseditem={onClickCreateUseditem}
      onClickUpdateUseditem={onClickUpdateUseditem}
      isModalVisible={isModalVisible}
    />
  );
}
