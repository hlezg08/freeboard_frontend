import MarketWriteUI from "./MarketWrite.presenter";
import { ChangeEvent, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CREATE_USED_ITEM } from "./MarketWrite.queries";
import { Modal } from "antd";

const schema = yup.object({
  name: yup.string().required("상품명은 필수 입력입니다."),
  remarks: yup.string().required("한 줄 요약은 필수 입력입니다."),
  contents: yup.string().required("내용은 필수 입력입니다."),
  price: yup
    .string()
    .required("가격은 필수 입력입니다.")
    .matches(/(\d)/, "가격은 숫자만 입력 가능합니다."),
});

export default function MarketWrite() {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [imageUrls, setImageUrls] = useState<string[]>(["", "", ""]);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");

  const onClickCreateUseditem = async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
          },
        },
      });
      console.log(result);
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

  return (
    <MarketWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      imageUrls={imageUrls}
      zipcode={zipcode}
      address={address}
      onClickCreateUseditem={onClickCreateUseditem}
    />
  );
}
