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

const schema = yup.object({
  name: yup.string().required("상품명은 필수 입력입니다."),
  remarks: yup.string().required("한 줄 요약은 필수 입력입니다."),
  contents: yup.string().required("내용은 필수 입력입니다."),
  price: yup
    .string()
    .required("가격은 필수 입력입니다.")
    .matches(/(\d)/, "가격은 숫자만 입력 가능합니다."),
});

export default function MarketWrite(props: IMarketWriteProps) {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const { register, handleSubmit, formState, setValue, trigger, reset } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  useEffect(() => {
    reset({
      name: props.data?.fetchUseditem.name,
      remarks: props.data?.fetchUseditem.remarks,
      price: props.data?.fetchUseditem.price,
      contents: props.data?.fetchUseditem.contents,
    });
  }, [props.data]);

  const [imageUrls, setImageUrls] = useState<string[]>(["", "", ""]);
  const [zipcode] = useState("");
  const [address] = useState("");

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
  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setImageUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  return (
    <MarketWriteUI
      loading={props.loading}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      setValue={setValue}
      trigger={trigger}
      imageUrls={imageUrls}
      zipcode={zipcode}
      address={address}
      isEdit={props.isEdit}
      onChangeFiles={onChangeFiles}
      onClickCreateUseditem={onClickCreateUseditem}
      onClickUpdateUseditem={onClickUpdateUseditem}
    />
  );
}
