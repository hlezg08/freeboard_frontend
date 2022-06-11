import { SearchWrapper, SearchIcon, SearchInput } from "./Searchbar.styles";
import { ISearchbarUIProps } from "./Searchbar.types";

export default function SearchbarUI(props: ISearchbarUIProps) {
  return (
    <>
      <SearchWrapper>
        <SearchIcon src="../../icons/ic-search.svg" />
        <SearchInput
          type="text"
          onChange={props.onChangeSearch}
          placeholder="제목을 검색해주세요."
        />
      </SearchWrapper>
    </>
  );
}
