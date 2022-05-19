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

export const Button = styled.button`
  margin: 5px;
  padding: 10px;
  background-color: white;
  border: 1px solid lightgray;
  color: red;
  :hover {
    background-color: yellow;
    cursor: pointer;
  }
`;
