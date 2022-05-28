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
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  font-size: 18px;
`;
export const TableHead = styled.thead`
  height: 40px;
`;
export const Row = styled.tr``;

export const Column = styled.td`
  text-align: center;
  height: 40px;
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
export const Footer = styled.div`
  width: 100%;
  padding-top: 30px;
  display: inline-block;
  position: relative;
`;

export const Button = styled.button`
  position: absolute;
  top: 30px;
  right: 10%;
  width: 80px;
  height: 40px;
  background-color: #e7dafc;
  color: #8a4af3;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;
