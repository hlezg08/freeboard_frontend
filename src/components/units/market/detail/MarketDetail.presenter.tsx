import * as S from "./MarketDetail.styles";
import ButtonWhite from "../../../commons/buttons/white";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import DOMPurify from "dompurify";
import KakaoMap from "../../../commons/kakao-map";
import { v4 as uuid } from "uuid";
import { Avatar } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from "moment";
import "moment/locale/ko";
import { ChangeEvent } from "react";
interface IMarketDetailUIProps {
  data?: any;
  onClickDeleteUseditem: () => void;
  userData?: any;
  onClickPick: () => void;
  onClickShowBuyModal: () => void;
  isVisible: boolean;
}

export default function MarketDetailUI(props: IMarketDetailUIProps) {
  const { onClickMoveToPage } = useMoveToPage();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <S.Wrapper>
      <S.DetailWrapper>
        <S.ItemWrapper>
          {/* <S.ItemImageWrapper
            onError={(event) =>
              (event.target.src = "../../images/error-image.png")
            }
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
          /> */}
          <S.CarouselWrapper>
            <S.MySlider {...settings}>
              {props.data?.fetchUseditem.images.map(
                (el: any, index: number) => {
                  return (
                    <S.CarouselImage
                      onError={(event: ChangeEvent<HTMLImageElement>) => {
                        if (event.target instanceof Element) {
                          event.target.src = "../../images/error-image.png";
                        }
                      }}
                      key={index}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  );
                }
              )}
            </S.MySlider>
          </S.CarouselWrapper>
          <S.ContentsWrapper>
            <S.SellerWrapper>
              <Avatar
                style={{ width: 35, height: 35 }}
                src="../../icons/ic-profile.svg"
              />
              <S.Title1>{props.data?.fetchUseditem.seller.name}</S.Title1>
              <S.Title2>
                (
                {moment(props.data?.fetchUseditem.createdAt)
                  .endOf("minute")
                  .fromNow()}
                )
              </S.Title2>
            </S.SellerWrapper>
            <S.Hr />
            <S.Title1>{props.data?.fetchUseditem.name}</S.Title1>
            <S.Title2>{props.data?.fetchUseditem.price}원</S.Title2>
            <S.Hr />
            <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
            <S.ItemTagsWrapper>
              {props.data?.fetchUseditem?.tags.map((el) => (
                <S.ItemTagButton key={uuid()}>{el}</S.ItemTagButton>
              ))}
            </S.ItemTagsWrapper>
          </S.ContentsWrapper>
        </S.ItemWrapper>

        <S.Body>
          <S.ProductDetailWrapper>
            <S.Title1>상품 상세 정보</S.Title1>
            <S.Title2>
              거래 위치 : {props.data?.fetchUseditem.useditemAddress?.address}{" "}
              {props.data?.fetchUseditem.useditemAddress?.addressDetail}
            </S.Title2>
            {(props.data?.fetchUseditem.useditemAddress?.lat ||
              props.data?.fetchUseditem.useditemAddress?.address) && (
              <KakaoMap
                width={380}
                height={300}
                lat={props.data?.fetchUseditem.useditemAddress?.lat}
                lng={props.data?.fetchUseditem.useditemAddress?.lng}
                address={props.data?.fetchUseditem.useditemAddress?.address}
              />
            )}
          </S.ProductDetailWrapper>
          {typeof window !== "undefined" ? (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            />
          ) : (
            <div></div>
          )}
        </S.Body>
        <S.ItemButtonWrapper>
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
            <>
              <ButtonWhite
                onClick={props.onClickPick}
                title={`찜(${props.data?.fetchUseditem.pickedCount})`}
              />
              <ButtonWhite
                title="구매하기"
                onClick={props.onClickShowBuyModal}
              />
            </>
          )}
        </S.ItemButtonWrapper>
      </S.DetailWrapper>
    </S.Wrapper>
  );
}
