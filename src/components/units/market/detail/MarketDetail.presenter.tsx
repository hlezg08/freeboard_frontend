import * as D from "./MarketDetail.styles";
import ButtonWhite from "../../../commons/buttons/white";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { getDateTime } from "../../../../commons/libraries/utils";
import DOMPurify from "dompurify";
interface IMarketDetailUIProps {
  data?: any;
}
export default function MarketDetailUI(props: IMarketDetailUIProps) {
  const { onClickMoveToPage } = useMoveToPage();
  console.log(props.data?.fetchUseditem);
  return (
    <>
      <D.DetailWrapper>
        <D.DetailBody>
          <D.WriterWrapper>
            <D.Icon src="../../icons/ic-profile.svg"></D.Icon>
            <D.WriterText>
              <D.WriterName>
                {props.data?.fetchUseditem.seller.name}
              </D.WriterName>
              <D.Date>
                Date : {getDateTime(props.data?.fetchUseditem.createdAt)}
              </D.Date>
            </D.WriterText>
          </D.WriterWrapper>
          <D.Hr></D.Hr>
          <D.ContentsWrapper>
            <D.ProductInfoWrapper>
              <D.ProductTitle>
                상품 이름: {props.data?.fetchUseditem.name}
              </D.ProductTitle>
              <D.ProductRemarks>
                한줄 요약: {props.data?.fetchUseditem.remarks}
              </D.ProductRemarks>
              <D.ProductPrice>
                {props.data?.fetchUseditem.price}원
              </D.ProductPrice>
            </D.ProductInfoWrapper>
            <D.Hr></D.Hr>
            <div>상품 상세 정보</div>
            <D.Hr></D.Hr>
            {typeof window !== "undefined" ? (
              <div
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
      </D.DetailWrapper>

      <D.ButtonWrapper>
        <ButtonWhite title="목록" onClick={onClickMoveToPage(`/market/`)} />
        <ButtonWhite
          title="수정"
          onClick={onClickMoveToPage(
            `/market/${props.data?.fetchUseditem._id}/edit`
          )}
        />
        <ButtonWhite title="삭제" onClick={props.onClickDeleteUseditem} />
      </D.ButtonWrapper>
    </>
  );
}
