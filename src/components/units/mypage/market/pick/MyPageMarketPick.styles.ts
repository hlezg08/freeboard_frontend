import styled from "@emotion/styled";

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
  border-top: 1px solid #333333;
  border-bottom: 1px solid #333333;
  font-size: 18px;
  margin: 30px 0px;
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
export const ButtonWrapper = styled.div`
  margin-left: 15px;
`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
