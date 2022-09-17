import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  writer: yup.string().required("작성자는 필수 입력 사항입니다."),
  password: yup.string().required("비밀번호는 필수 입력 사항입니다."),
  title: yup.string().required("제목은 필수 입력 사항입니다."),
  contents: yup.string().required("내용은 필수 입력 사항입니다."),
  zipcode: yup.number(),
  address: yup.string(),
  addressDetail: yup.string(),
  youtubeUrl: yup.string(),
});

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const { register, handleSubmit, formState, reset, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    reset({
      writer: props.data?.fetchBoard.writer,
      title: props.data?.fetchBoard.title,
      contents: props.data?.fetchBoard.contents,
      youtubeUrl: props.data?.fetchBoard.youtubeUrl,
    });
  }, [props.data]);

  const [imageUrls, setImageUrls] = useState<string[]>(["", "", ""]);
  const [isActive] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onChangeFiles = (fileUrl: string, index: number) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = fileUrl;
    setImageUrls(newImageUrls);
  };

  const onClickCreateBoard = async (data: any) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            images: imageUrls,
            boardAddress: {
              zipcode: data.boardAddress.zipcode,
              address: data.boardAddress.address,
              addressDetail: data.boardAddress.addressDetail,
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
  };

  const onClickUpdateBoard = async (data) => {
    // 이전 파일과 수정한 파일이 같은지 비교
    // const currentFiles = JSON.stringify(imageUrls);
    // const defaultFiles = JSON.stringify(props.data.fetchBoard.images);
    // const isChangeFiles = currentFiles !== defaultFiles;
    try {
      const updateBoardInput: IUpdateBoardInput = {};

      if (data.title) updateBoardInput.title = data.title;
      if (data.contents) updateBoardInput.contents = data.contents;
      if (data.youtubeUrl) updateBoardInput.youtubeUrl = data.youtubeUrl;
      if (imageUrls) updateBoardInput.images = imageUrls;

      // 주소 수정
      if (
        data.boardAddress.zipcode ||
        data.boardAddress.address ||
        data.boardAddress.addressDetail
      ) {
        updateBoardInput.boardAddress = {};
        if (data.boardAddress.zipcode)
          updateBoardInput.boardAddress.zipcode = data.boardAddress.zipcode;
        if (data.boardAddress.address)
          updateBoardInput.boardAddress.address = data.boardAddress.address;
        if (data.boardAddress.addressDetail)
          updateBoardInput.boardAddress.addressDetail =
            data.boardAddress.addressDetail;
      }

      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: data.password,
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
    setValue("boardAddress.zipcode", data.zonecode);
    setValue("boardAddress.address", data.address);
    setIsModalVisible((prev) => !prev);
  };

  // 사진 defaultValue
  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setImageUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  return (
    <BoardWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      imageUrls={imageUrls}
      onChangeFiles={onChangeFiles}
      onClickCreateBoard={onClickCreateBoard}
      onClickUpdateBoard={onClickUpdateBoard}
      onClickSearchAddress={onClickSearchAddress}
      onCompleteSearchAddress={onCompleteSearchAddress}
      data={props.data}
      isEdit={props.isEdit}
      isActive={isActive}
      isModalVisible={isModalVisible}
    />
  );
}
