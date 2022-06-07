import { Modal } from "antd";
import { ChangeEvent, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [imageUrls, setImageUrls] = useState<string[]>(["", "", ""]);
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
    youtubeUrl: "",
  });
  const { writer, password, title, contents, youtubeUrl } = inputs;

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [errorWriter, setErrorWriter] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContents, setErrorContents] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
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
    // 한 글자만 들어와도 true로 변하도록 보완하기
    if (writer && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onChangeFiles = (fileUrl: string, index: number) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = fileUrl;
    setImageUrls(newImageUrls);
  };

  const onClickCreateBoard = async () => {
    if (!writer) {
      setErrorWriter("작성자 입력은 필수입니다.");
    }
    if (!password) {
      setErrorPassword("비밀번호 입력은 필수입니다.");
    }
    if (!title) {
      setErrorTitle("제목 입력은 필수입니다.");
    }
    if (!contents) {
      setErrorContents("내용 입력은 필수입니다.");
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
              images: imageUrls,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        Modal.success({
          content: "게시물이 등록되었습니다.",
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
    // 이전 파일과 수정한 파일이 같은지 비교
    // const currentFiles = JSON.stringify(imageUrls);
    // const defaultFiles = JSON.stringify(props.data.fetchBoard.images);
    // const isChangeFiles = currentFiles !== defaultFiles;
    try {
      const updateBoardInput: IUpdateBoardInput = {};

      if (title) updateBoardInput.title = title;
      if (contents) updateBoardInput.contents = contents;
      if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
      if (imageUrls) updateBoardInput.images = imageUrls;

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
        content: "게시물이 수정되었습니다.",
      });
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  };

  const onClickSearchAddress = () => {
    setIsModalVisible((prev) => !prev);
  };

  const onCompleteSearchAddress = (data: any) => {
    setZipcode(data.zonecode);
    setAddress(data.address);

    setIsModalVisible((prev) => !prev);
  };

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setImageUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  return (
    <BoardWriteUI
      imageUrls={imageUrls}
      errorWriter={errorWriter}
      errorPassword={errorPassword}
      errorTitle={errorTitle}
      errorContents={errorContents}
      onChangeInputs={onChangeInputs}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeFiles={onChangeFiles}
      onClickCreateBoard={onClickCreateBoard}
      onClickUpdateBoard={onClickUpdateBoard}
      onClickSearchAddress={onClickSearchAddress}
      onCompleteSearchAddress={onCompleteSearchAddress}
      data={props.data}
      isEdit={props.isEdit}
      isActive={isActive}
      isModalVisible={isModalVisible}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
    />
  );
}
