import BoardUI from "./Board.presenter";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
const FETCH_BOARDS = gql`
  query {
    fetchBoards(page: 1) {
      _id
      title
      writer
      createdAt
    }
  }
`;
export default function Board() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickMoveToNew = () => {
    router.push(`/boards/new`);
  };
  const onClickMoveToDetail = (event) => {
    console.log(event.target.id);
    router.push(`/boards/${event.target.id}`);
  };
  return (
    <BoardUI
      onClickMoveToNew={onClickMoveToNew}
      onClickMoveToDetail={onClickMoveToDetail}
      data={data}
    ></BoardUI>
  );
}
