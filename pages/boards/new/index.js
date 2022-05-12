import * as S from "../../../styles/emotion";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function boardPage() {
  const [callGraphql] = useMutation(CREATE_BOARD);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [errorWriter, setErrorWriter] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContents, setErrorContents] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setErrorWriter("");
    }
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setErrorPassword("");
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setErrorTitle("");
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setErrorContents("");
    }
  };
  const onClickSubmit = async () => {
    if (writer === "") {
      setErrorWriter("작성자 입력은 필수입니다.");
    }
    if (password === "") {
      setErrorPassword("비밀번호 입력은 필수입니다.");
    }
    if (title === "") {
      setErrorTitle("한 글자 이상 제목을 입력하세요.");
    }
    if (contents === "") {
      setErrorContents("한 글자 이상 내용을 입력하세요.");
    }
    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      const result = await callGraphql({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
          },
        },
      });
      console.log(result);
      //console.log(result.data.createBoard.title);
      //console.log(result.data.createBoard.contents);
      alert("게시글이 등록되었습니다.");
    }
  };
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
            <S.Error>{errorWriter}</S.Error>
          </S.Group>
          <S.Group>
            <S.Label>비밀번호</S.Label>
            <S.Text
              type="password"
              onChange={onChangePassword}
              placeholder="비밀번호를 입력해주세요."
            />
            <S.Error>{errorPassword}</S.Error>
          </S.Group>
        </S.WriterGroup>

        <S.Group>
          <S.Label>제목</S.Label>
          <S.Text
            type="text"
            onChange={onChangeTitle}
            placeholder="제목을 작성해주세요."
          />
          <S.Error>{errorTitle}</S.Error>
        </S.Group>
        <S.Group>
          <S.Label>내용</S.Label>
          <S.TextLarge
            type="text"
            onChange={onChangeContents}
            placeholder="내용을 작성해주세요."
          />
          <S.Error>{errorContents}</S.Error>
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
