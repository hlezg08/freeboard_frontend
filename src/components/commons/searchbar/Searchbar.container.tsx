import SearchbarUI from "./Searchbar.presenter";
import _ from "lodash";
import { ChangeEvent } from "react";
import { ISearchbarProps } from "./Searchbar.types";

export default function Searchbar(props: ISearchbarProps) {
  const getDebounce = _.debounce((data: string) => {
    props.refetch({ search: data, page: 1 });
    props.refetchBoardsCount({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  return <SearchbarUI onChangeSearch={onChangeSearch}></SearchbarUI>;
}
