import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";
import { Modal } from "antd";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
    youtubeUrl: "",
  });
  const { writer, password, title, contents, youtubeUrl } = inputs;

  // const [writer, setWriter] = useState("");
  // const [password, setPassword] = useState("");
  // const [title, setTitle] = useState("");
  // const [contents, setContents] = useState("");
  // const [youtubeUrl, setYoutubeUrl] = useState("");

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  // const [errors, setErrors] = useState({
  //   writer: "",
  //   password: "",
  //   title: "",
  //   contents: "",
  // });
  // const { errorWriter, errorPassword, errorTitle, errorContents } = errors;

  const [errorWriter, setErrorWriter] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContents, setErrorContents] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onChange = (event: ChangeEvent<HTMLElement>) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    if (value !== "") {
      if (name === "writer") setErrorWriter("");
      if (name === "password") setErrorPassword("");
      if (name === "title") setErrorTitle("");
      if (name === "contents") setErrorContents("");
    }
    //한 글자만 들어와도 true로 변하도록 보완하기
    if (writer && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
  //   setWriter(event.target.value);
  //   if (event.target.value !== "") {
  //     setErrorWriter("");
  //   }
  //   if (event.target.value && password && title && contents) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // };
  // const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  //   if (event.target.value !== "") {
  //     setErrorPassword("");
  //   }
  //   if (writer && event.target.value && title && contents) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // };
  // const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value);
  //   if (event.target.value !== "") {
  //     setErrorTitle("");
  //   }
  //   if (writer && password && event.target.value && contents) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // };
  // const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
  //   setContents(event.target.value);
  //   if (event.target.value !== "") {
  //     setErrorContents("");
  //   }
  //   if (writer && password && title && event.target.value) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // };
  // const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
  //   setYoutubeUrl(event.target.value);
  // };
  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onClickCreateBoard = async () => {
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
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        Modal.success({
          content: "게시물 등록에 성공했습니다!",
        });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };
  const onClickUpdateBoard = async () => {
    try {
      const updateBoardInput: IUpdateBoardInput = {};

      if (title) updateBoardInput.title = title;
      if (contents) updateBoardInput.contents = contents;
      if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;

      if (zipcode || address || addressDetail) {
        updateBoardInput.boardAddress = {};
        if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
        if (address) updateBoardInput.boardAddress.address = address;
        if (addressDetail)
          updateBoardInput.boardAddress.addressDetail = addressDetail;
      }

      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      Modal.success({
        content: "게시물 수정에 성공했습니다!",
      });
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  };

  const onClickModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const onCompleteModal = (data: any) => {
    setZipcode(data.zonecode);
    setAddress(data.address);

    setIsModalVisible((prev) => !prev);
  };

  return (
    <BoardWriteUI
      errorWriter={errorWriter}
      errorPassword={errorPassword}
      errorTitle={errorTitle}
      errorContents={errorContents}
      onChange={onChange}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickCreateBoard={onClickCreateBoard}
      onClickUpdateBoard={onClickUpdateBoard}
      data={props.data}
      isEdit={props.isEdit}
      isActive={isActive}
      isModalVisible={isModalVisible}
      onClickModal={onClickModal}
      onCompleteModal={onCompleteModal}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
    />
  );
}
