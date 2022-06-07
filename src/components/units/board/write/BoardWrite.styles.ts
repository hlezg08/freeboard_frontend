import styled from "@emotion/styled";
import { ISubmitBtnProps } from "./BoardWrite.types";
export const Wrapper = styled.div`
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
export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;
export const Label = styled.span`
  font-size: 13pt;
  padding: 10px 0px;
`;
export const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px;
  border-width: 1px;
`;
export const AddressInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px;
  border-width: 1px;
  margin-bottom: 10px;
`;
export const ContentsInput = styled.textarea`
  height: 300px;
  padding: 10px;
  resize: none;
`;
export const ZipCode = styled.input`
  width: 80px;
  height: 45px;
  text-align: center;
  border-width: 1px;
`;
export const ZipCodeWrapper = styled.div`
  display: flex;
  padding-bottom: 10px;
`;
export const SearchButton = styled.button`
  background-color: black;
  color: white;
  width: 100px;
  height: 45px;
  margin-left: 20px;
  border: none;
  border-radius: 5px;
`;
export const ImageWrapper = styled.div`
  display: flex;
`;
export const RadioWrapper = styled.div`
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
export const SubmitWrapper = styled.div`
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
    props.isActive ? "#faeae7" : "#f9f9f9"};
  border-radius: 5px;
  color: ${(props: ISubmitBtnProps) => (props.isActive ? "#e9998a" : "gray")};
  :hover {
    cursor: pointer;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 13px;
`;
