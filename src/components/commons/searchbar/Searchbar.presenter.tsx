import { SearchWrapper, SearchIcon, SearchInput } from "./Searchbar.styles";
import { ChangeEvent } from "react";
interface ISearchbarUIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchbarUI(props: ISearchbarUIProps) {
  return (
    <>
      <SearchWrapper>
        <SearchIcon />
        <SearchInput
          type="text"
          onChange={props.onChangeSearch}
          placeholder="제목을 검색해주세요."
        />
      </SearchWrapper>
    </>
  );
}
