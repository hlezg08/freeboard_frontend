import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
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
  width: 80%;
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
`;
export const Button = styled.button`
  width: 80px;
  height: 45px;
  margin: 5px;
  padding: 10px;
  background-color: #e7f9eb;
  color: #009f47;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;
