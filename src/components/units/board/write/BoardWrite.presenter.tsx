import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.App>
      <S.Body>
        <S.Header>{props.isEdit ? "게시물 수정" : "게시물 등록"}</S.Header>
        <S.WriterGroup>
          <S.Group>
            <S.Label>작성자</S.Label>
            <S.Text
              type="text"
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer}
              placeholder="이름을 적어주세요."
            />
            <S.Error>{props.errorWriter}</S.Error>
          </S.Group>
          <S.Group>
            <S.Label>비밀번호</S.Label>
            <S.Text
              type="password"
              onChange={props.onChangePassword}
              placeholder="비밀번호를 입력해주세요."
            />
            <S.Error>{props.errorPassword}</S.Error>
          </S.Group>
        </S.WriterGroup>

        <S.Group>
          <S.Label>제목</S.Label>
          <S.Text
            type="text"
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
            placeholder="제목을 작성해주세요."
          />
          <S.Error>{props.errorTitle}</S.Error>
        </S.Group>
        <S.Group>
          <S.Label>내용</S.Label>
          <S.TextLarge
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
            placeholder="내용을 작성해주세요."
          />
          <S.Error>{props.errorContents}</S.Error>
        </S.Group>

        <S.Group>
          <S.Label>주소</S.Label>
          <S.PostCodeGroup>
            <S.PostCode type="text" placeholder="07250" />
            <S.SearchBtn>우편번호 검색</S.SearchBtn>
          </S.PostCodeGroup>
          <S.Text readOnly type="text" />
          <S.Text type="text" />
        </S.Group>

        <S.Group>
          <S.Label>유튜브</S.Label>
          <S.Text
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl}
            type="text"
            placeholder="링크를 복사해주세요."
          />
        </S.Group>

        <S.Group>
          <S.Label>사진 첨부</S.Label>
          <S.PhotoGroup>
            <S.Photo>Upload</S.Photo>
            <S.Photo>Upload</S.Photo>
            <S.Photo>Upload</S.Photo>
          </S.PhotoGroup>
        </S.Group>

        <S.Group>
          <S.Label>메인 설정</S.Label>
          <S.RadioGroup>
            <S.RadioInput type="radio" id="youtube" name="main-radio" />
            <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
            <S.RadioInput type="radio" id="photo" name="main-radio" />
            <S.RadioLabel htmlFor="photo">사진</S.RadioLabel>
          </S.RadioGroup>
        </S.Group>
        <S.SubmitGroup>
          <S.SubmitButton
            onClick={
              props.isEdit ? props.onClickUpdateBoard : props.onClickCreateBoard
            }
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정" : "등록"}하기
          </S.SubmitButton>
        </S.SubmitGroup>
      </S.Body>
    </S.App>
  );
}
