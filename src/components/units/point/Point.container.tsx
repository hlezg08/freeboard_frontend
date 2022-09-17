import { Dispatch, SetStateAction, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal, Button } from "antd";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./Point.queries";
import { FETCH_USER_LOGGED_IN } from "../login/Login.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PointSelect = styled.select`
  width: 360px;
  height: 40px;
  border: none;
  border-bottom: 1px solid black;
  font-size: 18px;
`;

interface IPointProps {
  setVisible?: Dispatch<SetStateAction<boolean>>;
}

export default function Point({ setVisible }: IPointProps) {
  const router = useRouter();
  const DEFAULT_PRICES = [500, 1000, 2000, 5000];
  const [price, setPrice] = useState(DEFAULT_PRICES[0]);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const onChangeSelect = (event) => {
    setPrice(Number(event.target.value));
  };

  const requestPay = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "중고상품 포인트 충전",
        amount: price,
        buyer_email: data.fetchUserLoggedIn?.email,
        buyer_name: data.fetchUserLoggedIn?.name,
        m_redirect_url: "https://devlynn.shop/",
      },
      async (rsp: any) => {
        if (rsp.success) {
          try {
            await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            setVisible(false);
            Modal.success({ content: `결제가 완료되었습니다!` });
            router.push("/market");
          } catch (error) {
            Modal.error({ content: error.message });
          }
        } else {
          alert("결제 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>

      <Modal
        visible={true}
        onOk={requestPay}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key={0} onClick={requestPay}>
            충전하기
          </Button>,
        ]}
      >
        <ModalWrapper>
          <h2>충전하실 금액을 선택해주세요!</h2>
          <PointSelect id="price-select" onChange={onChangeSelect}>
            {DEFAULT_PRICES.map((price) => (
              <option key={price} value={price}>
                {price}원
              </option>
            ))}
          </PointSelect>
        </ModalWrapper>
      </Modal>
    </>
  );
}
