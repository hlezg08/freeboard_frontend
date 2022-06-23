import SearchbarUI from "./Searchbar.presenter";
import { ChangeEvent } from "react";
interface ISearchbarProps {
  refetch: any;
  refetchCount?: any;
  onChangeKeyword: (data: string) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Searchbar(props: ISearchbarProps) {
  return <SearchbarUI onChangeSearch={props.onChangeSearch}></SearchbarUI>;
}
