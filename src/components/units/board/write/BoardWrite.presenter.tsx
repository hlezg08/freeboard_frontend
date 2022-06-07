import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import Upload from "../../../commons/upload/Upload.container.presenter";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Body>
        <S.Header>{props.isEdit ? "게시물 수정" : "게시물 등록"}</S.Header>
        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>작성자</S.Label>
            <S.Input
              name="writer"
              type="text"
              onChange={props.onChangeInputs}
              defaultValue={props.data?.fetchBoard.writer}
              placeholder="이름을 적어주세요."
              disabled={props.isEdit}
            />
            <S.Error>{props.errorWriter}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Input
              name="password"
              type="password"
              onChange={props.onChangeInputs}
              placeholder="비밀번호를 입력해주세요."
            />
            <S.Error>{props.errorPassword}</S.Error>
          </S.InputWrapper>
        </S.WriterWrapper>

        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.Input
            name="title"
            type="text"
            onChange={props.onChangeInputs}
            defaultValue={props.data?.fetchBoard.title}
            placeholder="제목을 작성해주세요."
          />
          <S.Error>{props.errorTitle}</S.Error>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.ContentsInput
            name="contents"
            onChange={props.onChangeInputs}
            defaultValue={props.data?.fetchBoard.contents}
            placeholder="내용을 작성해주세요."
          />
          <S.Error>{props.errorContents}</S.Error>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>주소</S.Label>
          <S.ZipCodeWrapper>
            <S.ZipCode
              type="text"
              placeholder="07250"
              value={
                props.zipcode
                  ? props.zipcode
                  : props.data?.fetchBoard.boardAddress?.zipcode
              }
            />
            <S.SearchButton onClick={props.onClickSearchAddress}>
              우편번호 검색
            </S.SearchButton>
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
          <S.AddressInput
            readOnly
            type="text"
            value={
              props.address
                ? props.address
                : props.data?.fetchBoard.boardAddress?.address
            }
          />
          <S.AddressInput
            defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail}
            onChange={props.onChangeAddressDetail}
            type="text"
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>유튜브</S.Label>
          <S.Input
            name="youtubeUrl"
            onChange={props.onChangeInputs}
            defaultValue={props.data?.fetchBoard.youtubeUrl}
            type="text"
            placeholder="링크를 복사해주세요."
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
            <S.RadioInput type="radio" id="youtube" name="main-radio" />
            <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
            <S.RadioInput type="radio" id="photo" name="main-radio" />
            <S.RadioLabel htmlFor="photo">사진</S.RadioLabel>
          </S.RadioWrapper>
        </S.InputWrapper>

        <S.SubmitWrapper>
          <S.SubmitButton
            onClick={
              props.isEdit ? props.onClickUpdateBoard : props.onClickCreateBoard
            }
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정" : "등록"}하기
          </S.SubmitButton>
        </S.SubmitWrapper>
      </S.Body>
    </S.Wrapper>
  );
}
