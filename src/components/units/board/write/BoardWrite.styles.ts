import styled from "@emotion/styled";
import { ISubmitBtnProps } from "./BoardWrite.types";
export const App = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const Header = styled.h1`
  display: flex;
  justify-content: center;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 30px 0px;
  padding: 30px;
  border: 1px solid lightgray;
`;
export const WriterGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;
export const Label = styled.span`
  font-size: 13pt;
  padding: 10px 0px;
`;
export const Text = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px;
  border-width: 1px;
`;
export const AddressText = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px;
  border-width: 1px;
  margin-bottom: 10px;
`;
export const TextArea = styled.textarea`
  height: 300px;
  padding: 10px;
`;
export const ZipCode = styled.input`
  width: 80px;
  height: 45px;
  text-align: center;
  border-width: 1px;
`;
export const ZipCodeGroup = styled.div`
  display: flex;
  padding-bottom: 10px;
`;
export const SearchBtn = styled.button`
  background-color: black;
  color: white;
  width: 100px;
  height: 45px;
  margin-left: 20px;
  border: none;
  border-radius: 5px;
`;
export const PhotoGroup = styled.div`
  display: flex;
`;
export const Photo = styled.div`
  width: 78px;
  height: 78px;
  background-color: lightgray;
  border: none;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
`;
export const RadioInput = styled.input`
  width: 15px;
  height: 15px;
`;
export const RadioLabel = styled.label`
  font-size: 13pt;
  padding: 0px 5px;
`;
export const SubmitGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 15px 0px;
`;
export const SubmitButton = styled.button`
  align-items: center;
  border: none;
  width: 150px;
  height: 45px;
  font-size: 16px;
  background-color: ${(props: ISubmitBtnProps) =>
    props.isActive ? "#e7dafc" : "#f9f9f9"};
  border-radius: 5px;
  color: ${(props: ISubmitBtnProps) => (props.isActive ? "#8a4af3" : "gray")};
  :hover {
    cursor: pointer;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 13px;
`;
