import MarketDetailUI from "./MarketDetail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_USED_ITEM, DELETE_USED_ITEM } from "./MarketDetail.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useEffect } from "react";
import { FETCH_USER_LOGGED_IN } from "../../../units/login/Login.queries";

export default function MarketDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const onClickDeleteUseditem = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.useditemId },
      });
      Modal.success({
        content: "상품을 삭제했습니다",
      });
      router.push("/market");
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  };
  return (
    <MarketDetailUI
      data={data}
      userData={userData}
      onClickDeleteUseditem={onClickDeleteUseditem}
    ></MarketDetailUI>
  );
}
