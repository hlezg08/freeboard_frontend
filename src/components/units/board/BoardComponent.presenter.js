import * as S from "./BoardComponent.styles";
export default function BoardComponentUI(props) {
  return (
    <S.App>
      <S.Header>게시물 {props.isEdit ? "수정" : "등록"}</S.Header>
      <S.Body>
        <S.WriterGroup>
          <S.Group>
            <S.Label>작성자</S.Label>
            <S.Text
              type="text"
              onChange={props.onChangeWriter}
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
            placeholder="제목을 작성해주세요."
          />
          <S.Error>{props.errorTitle}</S.Error>
        </S.Group>
        <S.Group>
          <S.Label>내용</S.Label>
          <S.TextLarge
            type="text"
            onChange={props.onChangeContents}
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
          <S.Text type="text" placeholder="링크를 복사해주세요." />
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
          <S.SubmitBtn
            onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate}
            disabled={props.btnState}
          >
            {props.isEdit ? "수정" : "등록"}하기
          </S.SubmitBtn>
        </S.SubmitGroup>
      </S.Body>
    </S.App>
  );
}
