import { useState } from "react";
import Head from "next/head";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../src/commons/store";

declare const window: typeof globalThis & {
  IMP: any;
};
const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
    }
  }
`;

export default function PointPage() {
  const router = useRouter();
  const [price, setPrice] = useState(500);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const [userInfo] = useRecoilState(userInfoState);
  const onChangeSelect = (event) => {
    setPrice(Number(event.target.value));
  };
  const requestPay = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675"); // 멘토님 아이디로 수정
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "중고상품 포인트 충전",
        amount: price,
        buyer_email: userInfo.email,
        buyer_name: userInfo.name,
        // buyer_tel: "010-4242-4242",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/point",
      },
      async (rsp: any) => {
        if (rsp.success) {
          // 백엔드에 결제관련 데이터 넘겨주기 (mutation 실행)
          // ex: createPointTransactionOfLoading
          try {
            const result = await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            console.log(result.data?.createPointTransactionOfLoading);
            console.log(userInfo.name);
            console.log(userInfo.email);
            alert(`ID ${rsp.imp_uid} 결제 완료`);
            router.push("/market");
          } catch (error) {
            alert(error.message);
          }
        } else {
          alert("결제 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
  };
  return (
    <div>
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
      <h1>포인트 충전</h1>
      <select id="price-select" onChange={onChangeSelect}>
        <option defaultValue="500">500원</option>
        <option value="1000">1000원</option>
        <option value="2000">2000원</option>
        <option value="5000">5000원</option>
      </select>
      <button onClick={requestPay}>충전하기</button>
    </div>
  );
}
