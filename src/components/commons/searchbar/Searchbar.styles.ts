import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";
export const SearchWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 45px;

  background-color: #f2f2f2;
  border-radius: 5px;
  border: none;
  font-size: 16px;
`;
export const SearchIcon = styled(SearchOutlined)`
  padding: 15px;
  font-size: 20px;
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
