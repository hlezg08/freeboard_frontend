import MarketDetailUI from "./MarketDetail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
} from "./MarketDetail.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { FETCH_USER_LOGGED_IN } from "../../../units/login/Login.queries";
import { useState } from "react";
import { TOGGLE_USED_ITEM_PICK } from "../list/MarketList.queries";

export default function MarketDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const [isVisible, setIsVisible] = useState(false);

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
  const onClickShowBuyModal = () => {
    Modal.confirm({
      title: "이 상품을 구매하시겠습니까?",
      onOk() {
        onClickBuyUseditem();
      },
      onCancel() {},
    });
  };
  const onClickBuyUseditem = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: router.query.useditemId },
      });
      Modal.success({ content: "구매 완료되었습니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickPick = async () => {
    try {
      await toggleUseditemPick({
        variables: {
          useditemId: router.query.useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
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
      onClickShowBuyModal={onClickShowBuyModal}
      onClickPick={onClickPick}
      isVisible={isVisible}
    ></MarketDetailUI>
  );
}
