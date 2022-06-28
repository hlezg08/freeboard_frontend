import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import Upload from "../../../commons/upload/Upload.container.presenter";
import { v4 as uuidv4 } from "uuid";
import ButtonLightpink from "../../../commons/buttons/lightpink";
import InputDefault from "../../../commons/inputs/default";
import ButtonBlack from "../../../commons/buttons/black";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onClickUpdateBoard)
            : props.handleSubmit(props.onClickCreateBoard)
        }
      >
        <S.Header>{props.isEdit ? "게시물 수정" : "게시물 등록"}</S.Header>
        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>작성자</S.Label>
            <InputDefault
              register={props.register("writer")}
              type="text"
              value={props.data?.fetchBoard.writer}
              placeholder="작성자를 입력해주세요."
              readOnly={props.isEdit}
            />
            <S.Error>{props.formState.errors.writer?.message}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <InputDefault
              register={props.register("password")}
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
            <S.Error>{props.formState.errors.password?.message}</S.Error>
          </S.InputWrapper>
        </S.WriterWrapper>

        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <InputDefault
            register={props.register("title")}
            type="text"
            placeholder="제목을 작성해주세요."
          />
          <S.Error>{props.formState.errors.title?.message}</S.Error>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Textarea
            {...props.register("contents")}
            placeholder="내용을 작성해주세요."
          />
          <S.Error>{props.formState.errors.contents?.message}</S.Error>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>주소</S.Label>
          <S.ZipCodeWrapper>
            <S.ZipCodeInput
              {...props.register("boardAddress.zipcode")}
              type="text"
              placeholder="07250"
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
          <InputDefault
            register={props.register("boardAddress.address")}
            readOnly
            type="text"
          />
          <InputDefault
            register={props.register("boardAddress.addressDetail")}
            type="text"
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>유튜브</S.Label>
          <InputDefault
            register={props.register("youtubeUrl")}
            // defaultValue={props.data?.fetchBoard.youtubeUrl}
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
            <S.RadioButton type="radio" id="youtube" name="main-radio" />
            <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
            <S.RadioButton type="radio" id="photo" name="main-radio" />
            <S.RadioLabel htmlFor="photo">사진</S.RadioLabel>
          </S.RadioWrapper>
        </S.InputWrapper>

        <S.SubmitWrapper>
          <ButtonLightpink
            isEdit={props.isEdit}
            isActive={props.formState.isValid}
            title={props.isEdit ? "수정하기" : "등록하기"}
          />
        </S.SubmitWrapper>
      </S.Form>
    </S.Wrapper>
  );
}
