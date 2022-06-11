import * as S from "../../board/write/BoardWrite.styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import Upload from "../../../commons/upload/Upload.container.presenter";
import InputDefault from "../../../commons/inputs/default";
import ButtonLightpink from "../../../commons/buttons/lightpink";
import ButtonBlack from "../../../commons/buttons/black";
import { v4 as uuidv4 } from "uuid";

export default function MarketWriteUI(props) {
  return (
    <S.Wrapper>
      <S.Form>
        <S.Header>{props.isEdit ? "상품 수정" : "상품 등록"}</S.Header>
        <S.InputWrapper>
          <S.Label>상품명</S.Label>
          <InputDefault type="text" placeholder="상품명을 입력해주세요." />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>가격</S.Label>
          <InputDefault type="number" placeholder="가격을 입력해주세요." />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Textarea placeholder="내용을 입력해주세요." />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>태그</S.Label>
          <InputDefault type="text" placeholder="태그를 입력해주세요." />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>주소</S.Label>
          <S.ZipCodeWrapper>
            <S.ZipCodeInput
              type="text"
              placeholder="07250"
              // value={
              //   props.zipcode
              //     ? props.zipcode
              //     : props.data?.fetchBoard.boardAddress?.zipcode
              // }
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
          </S.ZipCodeWrapper>
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
            defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail}
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
                // onChangeFiles={props.onChangeFiles}
              />
            ))}
          </S.ImageWrapper>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>메인 설정</S.Label>
          <S.RadioWrapper>
            <S.RadioButton type="radio" id="option1" name="option1" />
            <S.RadioLabel htmlFor="option1">옵션 1</S.RadioLabel>
            <S.RadioButton type="radio" id="option2" name="option2" />
            <S.RadioLabel htmlFor="option2">옵션 2</S.RadioLabel>
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
