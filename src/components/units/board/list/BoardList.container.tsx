import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "./BoardList.queries";
import { MouseEvent, useState, ChangeEvent } from "react";
import BoardListUI from "./BoardList.presenter";
import _ from "lodash";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const [keyword, setKeyword] = useState("");

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  const onClickMoveToNew = () => {
    router.push(`/boards/new`);
  };
  const onClickMoveToDetail = (event: MouseEvent<HTMLElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards/${event.currentTarget.id}`);
  };

  return (
    <>
      <BoardListUI
        keyword={keyword}
        data={data}
        refetch={refetch}
        onChangeSearch={onChangeSearch}
        onClickMoveToNew={onClickMoveToNew}
        onClickMoveToDetail={onClickMoveToDetail}
      ></BoardListUI>
    </>
  );
}
