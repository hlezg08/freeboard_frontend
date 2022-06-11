import styled from "@emotion/styled";
export const SearchWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 45px;
  background-color: #f2f2f2;
  border-radius: 5px;
  border: none;
  font-size: 16px;
`;
export const SearchIcon = styled.img`
  margin-left: 15px;
`;
export const SearchInput = styled.input`
  width: 100%;
  padding: 15px;
  background-color: transparent;
  border: none;
  :focus {
    outline: none;
  }
`;
