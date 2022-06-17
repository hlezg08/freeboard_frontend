import * as S from "./MarketWrite.styles";
// import { Modal } from "antd";
// import DaumPostcode from "react-daum-postcode";
// import Upload from "../../../commons/upload/Upload.container.presenter";
import InputDefault from "../../../commons/inputs/default";
import ButtonLightpink from "../../../commons/buttons/lightpink";
import dynamic from "next/dynamic";
import { IMarketWriteUIProps } from "./MarketWrite.types";
import Upload from "../../../commons/upload/Upload.container.presenter";
import { v4 as uuidv4 } from "uuid";

const ToastEditor = dynamic(() => import("../../../commons/editor"), {
  ssr: false,
});

export default function MarketWriteUI(props: IMarketWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onClickUpdateUseditem)
            : props.handleSubmit(props.onClickCreateUseditem)
        }
      >
        <S.Header>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</S.Header>
        <S.InputWrapper>
          <S.Label>상품명</S.Label>
          <InputDefault
            register={props.register("name")}
            type="text"
            placeholder="상품명을 입력해주세요."
          />
          <S.Error>{props.formState.errors.name?.message}</S.Error>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>한 줄 요약</S.Label>
          <InputDefault
            register={props.register("remarks")}
            type="text"
            placeholder="요약을 입력해주세요."
          />
          <S.Error>{props.formState.errors.remarks?.message}</S.Error>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>상품 설명</S.Label>
          <ToastEditor setValue={props.setValue} trigger={props.trigger} />
          <S.Error>{props.formState.errors.contents?.message}</S.Error>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>판매 가격</S.Label>
          <InputDefault
            register={props.register("price")}
            type="text"
            placeholder="판매 가격을 입력해주세요."
          />
          <S.Error>{props.formState.errors.price?.message}</S.Error>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>태그</S.Label>
          <InputDefault type="text" placeholder="태그를 입력해주세요." />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>주소</S.Label>
          {/* <S.ZipCodeWrapper>
            <S.ZipCodeInput
              type="text"
              placeholder="07250"
              value={
                props.zipcode
                  ? props.zipcode
                  : props.data?.fetchBoard.boardAddress?.zipcode
              }
            />
            <ButtonBlack
              type="button"
              onClick={props.onClickSearchAddress}
              title="우편번호 검색"
            />

            {props.isModalVisible && (
              <Modal
                visible={true}
                onOk={props.onClickSearchAddress}
                onCancel={props.onClickSearchAddress}
              >
                <DaumPostcode onComplete={props.onCompleteSearchAddress} />
              </Modal>
            )}
          </S.ZipCodeWrapper> */}
          {/* 모달로 도로명 주소 값 받아오기 */}
          <S.AddressInput
            readOnly
            type="text"
            // value={
            //   props.address
            //     ? props.address
            //     : props.data?.fetchBoard.boardAddress?.address
            // }
          />
          {/* 세부 주소 사용자 입력 */}
          <InputDefault
            // defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail}
            type="text"
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>사진 첨부</S.Label>
          <S.ImageWrapper>
            {props.imageUrls.map((el: string, index: number) => (
              <Upload
                imageUrl={el}
                key={uuidv4()}
                index={index}
                onChangeFiles={props.onChangeFiles}
              />
            ))}
          </S.ImageWrapper>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>메인 설정</S.Label>
          <S.RadioWrapper>
            <S.RadioButton type="radio" id="option1" name="option1" />
            <S.RadioLabel htmlFor="option1">사진 1</S.RadioLabel>
            <S.RadioButton type="radio" id="option2" name="option2" />
            <S.RadioLabel htmlFor="option2">사진 2</S.RadioLabel>
          </S.RadioWrapper>
        </S.InputWrapper>

        <S.SubmitWrapper>
          <ButtonLightpink
            formState={props.formState}
            isEdit={props.isEdit}
          ></ButtonLightpink>
        </S.SubmitWrapper>
      </S.Form>
    </S.Wrapper>
  );
}
