import styled from "@emotion/styled";
interface IMatchedWordProps {
  isMatched: boolean;
}
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
`;
export const TableWrapper = styled.table`
  width: 80%;
  table-layout: auto;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  font-size: 18px;
`;
export const TableHead = styled.thead`
  height: 40px;
`;
export const TableBody = styled.tbody``;
export const Row = styled.tr``;

export const Column = styled.td`
  text-align: center;
  height: 45px;
  border-top: 1px solid lightgray;
`;
export const ColumnTitle = styled.td`
  text-align: center;
  height: 40px;
  border-top: 1px solid lightgray;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const MatchedWord = styled.span`
  color: ${(props: IMatchedWordProps) =>
    props.isMatched ? "#e9998a" : "black"};
`;
export const Footer = styled.div`
  width: 100%;
  padding-top: 30px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 80px;
  height: 45px;
  background-color: #e9998a;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin-left: 5%;
  :hover {
    cursor: pointer;
  }
`;

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
