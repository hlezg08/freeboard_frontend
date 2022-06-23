import * as D from "./MarketDetail.styles";
import ButtonWhite from "../../../commons/buttons/white";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { getDateTime } from "../../../../commons/libraries/utils";
import DOMPurify from "dompurify";
import KakaoMap from "../../../commons/kakao-map";
import { v4 as uuid } from "uuid";
interface IMarketDetailUIProps {
  data?: any;
  onClickDeleteUseditem: () => void;
}

export default function MarketDetailUI(props: IMarketDetailUIProps) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <D.DetailWrapper>
        <D.DetailBody>
          <D.SellerWrapper>
            <D.Icon src="../../icons/ic-profile.svg"></D.Icon>
            <D.SellerTextWrapper>
              <D.Title1>{props.data?.fetchUseditem.seller.name}</D.Title1>
              <D.Date>
                Date : {getDateTime(props.data?.fetchUseditem.createdAt)}
              </D.Date>
            </D.SellerTextWrapper>
          </D.SellerWrapper>
          <D.Hr></D.Hr>
          <D.ContentsWrapper>
            <D.ProductInfoWrapper>
              <D.Title2>상품 이름: {props.data?.fetchUseditem.name}</D.Title2>
              <D.Title3>
                한줄 요약: {props.data?.fetchUseditem.remarks}
              </D.Title3>
              {props.data?.fetchUseditem.tags.map((el) => (
                <D.Tag key={uuid()}>#{el}</D.Tag>
              ))}
              <D.Title3>{props.data?.fetchUseditem.price}원</D.Title3>
            </D.ProductInfoWrapper>
            <D.Hr></D.Hr>
            <D.Title2>상품 상세 정보</D.Title2>
            <D.Title3>
              거래 위치 : {props.data?.fetchUseditem.useditemAddress?.address}{" "}
              {props.data?.fetchUseditem.useditemAddress?.addressDetail}
            </D.Title3>
            {props.data?.fetchUseditem.useditemAddress?.lat && (
              <KakaoMap
                address={props.data?.fetchUseditem.useditemAddress?.address}
              />
            )}
            {typeof window !== "undefined" ? (
              <D.Title3
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    props.data?.fetchUseditem.contents
                  ),
                }}
              />
            ) : (
              <div></div>
            )}
            <D.ImgWrapper>
              {props.data?.fetchUseditem.images.map(
                (el: any, index: number) => {
                  return (
                    // 배열 요소 중 빈값이 아니면 이미지 보여주기
                    el && (
                      <D.Img
                        onError={(event) =>
                          (event.target.style.display = "none")
                        }
                        key={index}
                        src={`https://storage.googleapis.com/${el}`}
                      />
                    )
                  );
                }
              )}
            </D.ImgWrapper>
          </D.ContentsWrapper>
        </D.DetailBody>
        <D.ButtonWrapper>
          <ButtonWhite title="목록" onClick={onClickMoveToPage(`/market/`)} />
          {props.userData?.fetchUserLoggedIn.email ===
          props.data?.fetchUseditem.seller.email ? (
            <>
              <ButtonWhite
                title="수정"
                onClick={onClickMoveToPage(
                  `/market/${props.data?.fetchUseditem._id}/edit`
                )}
              />
              <ButtonWhite title="삭제" onClick={props.onClickDeleteUseditem} />
            </>
          ) : (
            <ButtonWhite title="구매하기" onClick={props.onClickShowBuyModal} />
          )}
        </D.ButtonWrapper>
      </D.DetailWrapper>
    </>
  );
}
