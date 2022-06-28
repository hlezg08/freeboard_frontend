import styled from "@emotion/styled";
interface IMatchedWordProps {
  isMatched: boolean;
}
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TableWrapper = styled.table`
  width: 100%;
  table-layout: auto;
  border-top: 1px solid #333333;
  border-bottom: 1px solid #333333;
  font-size: 18px;
  background-color: white;
`;
export const TableHead = styled.thead`
  height: 45px;
  background-color: #fcf4f3;
`;
export const TableBody = styled.tbody``;
export const Row = styled.tr``;
export const Column = styled.td`
  text-align: center;
  height: 45px;
  border-top: 1px solid #e5e5e5;
`;
export const ColumnTitle = styled.td`
  text-align: center;
  height: 45px;
  border-top: 1px solid #e5e5e5;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const MatchedWord = styled.span`
  color: ${(props: IMatchedWordProps) =>
    props.isMatched ? "#e9998a" : "black"};
`;
export const ButtonWrapper = styled.div`
  padding: 10px 0px;
`;
