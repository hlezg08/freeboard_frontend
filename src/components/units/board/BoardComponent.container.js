import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardComponentUI from "./BoardComponent.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardComponent.queries";

export default function BoardComponent(props) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [errorWriter, setErrorWriter] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContents, setErrorContents] = useState("");

  //disabled 디폴트가 true -> 빈 값이 없을 때 false
  const btnState = !(writer && title && contents);

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
  const onClickCreate = async () => {
    if (!writer) {
      setErrorWriter("작성자 입력은 필수입니다.");
    }
    if (!password) {
      setErrorPassword("비밀번호 입력은 필수입니다.");
    }
    if (!title) {
      setErrorTitle("한 글자 이상 제목을 입력하세요.");
    }
    if (!contents) {
      setErrorContents("한 글자 이상 내용을 입력하세요.");
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
            },
          },
        });

        alert("게시글이 등록되었습니다.");
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };
  const onClickUpdate = async () => {
    if (!writer) {
      setErrorWriter("작성자 입력은 필수입니다.");
    }
    if (!password) {
      setErrorPassword("비밀번호 입력은 필수입니다.");
    }
    if (!title) {
      setErrorTitle("한 글자 이상 제목을 입력하세요.");
    }
    if (!contents) {
      setErrorContents("한 글자 이상 내용을 입력하세요.");
    }
    if (writer && password && title && contents) {
      try {
        const result = await updateBoard({
          variables: {
            boardId: router.query.boardId,
            password: password,
            updateBoardInput: {
              title,
              contents,
            },
          },
        });
        //console.log(result.data.updateBoard._id);
        alert("게시글이 수정되었습니다.");
        router.push(`/boards/${result.data.updateBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };
  return (
    <BoardComponentUI
      isEdit={props.isEdit}
      btnState={btnState}
      errorWriter={errorWriter}
      errorContents={errorContents}
      errorPassword={errorPassword}
      errorTitle={errorTitle}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickCreate={onClickCreate}
      onClickUpdate={onClickUpdate}
    />
  );
}
