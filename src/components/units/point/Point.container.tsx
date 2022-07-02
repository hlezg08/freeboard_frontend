import { useState } from "react";
import Head from "next/head";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Modal, Button } from "antd";
// import styled from "@emotion/styled";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./Point.queries";
import { FETCH_USER_LOGGED_IN } from "../login/Login.queries";
import * as S from "./Point.styles";
declare const window: typeof globalThis & {
  IMP: any;
};
// const ModalWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// const PointSelect = styled.select`
//   width: 360px;
//   height: 40px;
//   border: none;
//   border-bottom: 1px solid black;
//   font-size: 18px;
// `;
interface IPointProps {
  setVisible?: any;
}
export default function Point(props: IPointProps) {
  const router = useRouter();
  const [price, setPrice] = useState(100);
  const [isSelect, setIsSelect] = useState(false);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const onClickDisplaySelect = () => {
    setIsSelect((prev) => !prev);
  };
  const onChangeSelect = (event) => {
    setPrice(Number(event.target.value));
    setIsSelect(false);
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
        m_redirect_url: "http://localhost:3000/",
      },
      async (rsp: any) => {
        if (rsp.success) {
          try {
            await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            props.setVisible(false);
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
    // <Modal
    //   visible={true}
    //   onOk={requestPay}
    //   onCancel={() => {
    //     props.setVisible(false);
    //   }}
    //   footer={[
    //     <Button key={uuid()} onClick={requestPay}>
    //       충전하기
    //     </Button>,
    //   ]}
    // >
    //   <ModalWrapper>
    //     <h2>충전하실 금액을 선택해주세요!</h2>
    //     <PointSelect id="price-select" onChange={onChangeSelect}>
    //       <option defaultValue="500">500원</option>
    //       <option value="1000">1000원</option>
    //       <option value="2000">2000원</option>
    //       <option value="5000">5000원</option>
    //     </PointSelect>
    //   </ModalWrapper>
    // </Modal>

    <S.Wrapper>
      <Head>
        {/* jQuery */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* iamport.payment.js */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.CancelIcon
        onClick={() => {
          props.setVisible(false);
        }}
      />

      <S.Title>충전하실 금액을 선택해주세요</S.Title>
      <S.PointWrapper>
        <S.SelectWrapper onClick={onClickDisplaySelect}>
          <S.SelctedPrice onChange={onChangeSelect}>{price}</S.SelctedPrice>
        </S.SelectWrapper>
        <S.ListWrapper isSelect={isSelect}>
          <S.List onClick={onChangeSelect} value="100">
            100
          </S.List>
          <S.List onClick={onChangeSelect} value="500">
            500
          </S.List>
          <S.List onClick={onChangeSelect} value="2000">
            2000
          </S.List>
          <S.List onClick={onChangeSelect} value="5000">
            5000
          </S.List>
        </S.ListWrapper>
      </S.PointWrapper>
      <S.SubmitButton onClick={requestPay}>충전하기</S.SubmitButton>
    </S.Wrapper>
  );
}
