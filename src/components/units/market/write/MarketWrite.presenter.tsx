import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";
import { Modal, Tooltip } from "antd";
import * as S from "./MarketWrite.styles";
import { IMarketWriteUIProps } from "./MarketWrite.types";
import ButtonLightpink from "../../../commons/buttons/lightpink";
import ButtonBlack from "../../../commons/buttons/black";
import Upload from "../../../commons/upload/Upload.container.presenter";
import KakaoMap from "../../../commons/kakao-map";
import DaumPostcode from "react-daum-postcode";
import Tags from "../../../commons/tags/Tags";
import InputDefault from "../../../commons/inputs/default";
import { useEffect } from "react";

const ToastEditor = dynamic(() => import("../../../commons/editor"), {
  ssr: false,
});

export default function MarketWriteUI(props: IMarketWriteUIProps) {
  useEffect(() => {
    if (props.isEdit) {
      props.setTags(props.data?.fetchUseditem.tags);
    }
  }, []);

  return (
    <S.Wrapper>
      <S.Form
        onSubmit={
          props.isEdit
            ? props.methods.handleSubmit(props.onClickUpdateUseditem)
            : props.methods.handleSubmit(props.onClickCreateUseditem)
        }
      >
        <S.Header>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</S.Header>
        <S.InputWrapper>
          <S.Label>상품명</S.Label>
          <InputDefault
            register={props.methods.register("name")}
            type="text"
            placeholder="상품명을 입력해주세요."
          />

          <S.Error>{props.methods.formState.errors.name?.message}</S.Error>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>한 줄 요약</S.Label>
          <InputDefault
            register={props.methods.register("remarks")}
            type="text"
            placeholder="요약을 입력해주세요."
          />
          <S.Error>{props.methods.formState.errors.remarks?.message}</S.Error>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>상품 설명</S.Label>
          <ToastEditor
            value={props.isEdit && props.data?.fetchUseditem.contents}
            setValue={props.methods.setValue}
            trigger={props.methods.trigger}
          />
          <S.Error>{props.methods.formState.errors.contents?.message}</S.Error>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>판매 가격</S.Label>
          <InputDefault
            register={props.methods.register("price")}
            type="number"
            placeholder="판매 가격을 입력해주세요."
          />
          <S.Error>{props.methods.formState.errors.price?.message}</S.Error>
        </S.InputWrapper>

        <S.InputWrapper>
          <Tooltip title="엔터를 누르면 등록, 더블클릭하면 수정 가능합니다.">
            <S.Label>태그</S.Label>
          </Tooltip>
          <S.TagsWrapper>
            <Tags tags={props.tags} setTags={props.setTags} />
          </S.TagsWrapper>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>거래 위치</S.Label>
          <S.LocationWrapper>
            <div>
              <KakaoMap
                width={300}
                height={250}
                address={
                  props.address ||
                  props.data?.fetchUseditem.useditemAddress.address
                }
              />
            </div>
            <S.LocationTextWrapper>
              <S.ZipCodeWrapper>
                <S.ZipCodeInput
                  {...props.methods.register("useditemAddress.zipcode")}
                  value={
                    props.methods.getValues("useditemAddress.zipcode") ||
                    props.data?.fetchUseditem.useditemAddress?.zipcode
                  }
                  type="text"
                  placeholder="07250"
                />
                <ButtonBlack
                  type="button"
                  onClick={props.onClickSearchAddress}
                  title="우편번호 검색"
                />
              </S.ZipCodeWrapper>

              <S.AddressWrapper>
                <InputDefault
                  register={props.methods.register("useditemAddress.address")}
                  value={
                    props.address ||
                    props.data?.fetchUseditem.useditemAddress?.address
                  }
                  readOnly
                  type="text"
                />
                <InputDefault
                  register={props.methods.register(
                    "useditemAddress.addressDetail"
                  )}
                  defaultValue={
                    props.data?.fetchUseditem.useditemAddress?.addressDetail
                  }
                  type="text"
                />
              </S.AddressWrapper>

              {props.isModalVisible && (
                <Modal
                  visible={true}
                  onOk={props.onClickSearchAddress}
                  onCancel={props.onClickSearchAddress}
                >
                  <DaumPostcode onComplete={props.onCompleteSearchAddress} />
                </Modal>
              )}
            </S.LocationTextWrapper>
          </S.LocationWrapper>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>사진 첨부</S.Label>
          <S.ImageWrapper>
            {props.imageUrls.map((el: string, index: number) => (
              <Upload
                isEdit={props.isEdit}
                imageUrl={el}
                imageUrls={props.imageUrls}
                setImageUrls={props.setImageUrls}
                files={props.files}
                setFiles={props.setFiles}
                key={uuidv4()}
                index={index}
                // onChangeFiles={props.onChangeFiles}
              />
            ))}
          </S.ImageWrapper>
        </S.InputWrapper>

        <S.SubmitWrapper>
          <ButtonLightpink
            isEdit={props.isEdit}
            isActive={props.methods.formState.isValid}
            title={props.isEdit ? "수정하기" : "등록하기"}
          />
        </S.SubmitWrapper>
      </S.Form>
    </S.Wrapper>
  );
}
