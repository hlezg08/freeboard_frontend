import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { firebaseApp } from "../../../../pages/_app";

export default function Community() {
  const onClickSubmit = async () => {
    // firebase에 데이터 한줄 등록하기
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: "철수",
      title: "제목입니다",
      contents: "내용이에요!!",
    });
  };

  useEffect(() => {
    // board 데이터베이스 가져오기
    const fetchBoard = async () => {
      const board = collection(getFirestore(firebaseApp), "board");
      const result = await getDocs(board);
      const datas = result.docs.map((el) => el.data());
      console.log(datas);
    };
    fetchBoard();
  });

  return (
    <div>
      <div>파이어베이스 연습!!!</div>
    </div>
  );
}
