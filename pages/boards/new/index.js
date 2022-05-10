import * as S from "../../../styles/emotion";
import { useState } from "react";

export default function boardPage() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [errorWriter, setErrorWriter] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContent, setErrorContent] = useState("");

  function onChangeWriter(event) {
    setWriter(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }
  function onChangeTitle(event) {
    setTitle(event.target.value);
  }
  function onChangeContent(event) {
    setContent(event.target.value);
  }
  function onClickSubmit() {
    if (writer === "") {
      setErrorWriter("작성자 입력은 필수입니다.");
    } else {
      setErrorWriter("");
    }
    if (password === "") {
      setErrorPassword("비밀번호 입력은 필수입니다.");
    } else {
      setErrorPassword("");
    }
    if (title === "") {
      setErrorTitle("한 글자 이상 제목을 입력하세요.");
    } else {
      setErrorTitle("");
    }
    if (content === "") {
      setErrorContent("한 글자 이상 내용을 입력하세요.");
    } else {
      setErrorContent("");
    }
  }
  return (
    <S.App>
      <S.Header>게시물 등록</S.Header>
      <S.Body>
        <S.WriterGroup>
          <S.Group>
            <S.Label>작성자</S.Label>
            <S.Text
              type="text"
              onChange={onChangeWriter}
              placeholder="이름을 적어주세요."
            />
            <S.ErrorMsg>{errorWriter}</S.ErrorMsg>
          </S.Group>
          <S.Group>
            <S.Label>비밀번호</S.Label>
            <S.Text
              type="password"
              onChange={onChangePassword}
              placeholder="비밀번호를 입력해주세요."
            />
            <S.ErrorMsg>{errorPassword}</S.ErrorMsg>
          </S.Group>
        </S.WriterGroup>

        <S.Group>
          <S.Label>제목</S.Label>
          <S.Text
            type="text"
            onChange={onChangeTitle}
            placeholder="제목을 작성해주세요."
          />
          <S.ErrorMsg>{errorTitle}</S.ErrorMsg>
        </S.Group>
        <S.Group>
          <S.Label>내용</S.Label>
          <S.TextLarge
            type="text"
            onChange={onChangeContent}
            placeholder="내용을 작성해주세요."
          />
          <S.ErrorMsg>{errorContent}</S.ErrorMsg>
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
          <S.SubmitBtn onClick={onClickSubmit}>등록하기</S.SubmitBtn>
        </S.SubmitGroup>
      </S.Body>
    </S.App>
  );
}
