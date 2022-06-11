import styled from "@emotion/styled";
import { KeyboardEvent } from "react";
interface IInput01Props {
  type: string;
  register: any;
  placeholder?: string;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
}
const LoginInput = styled.input`
  border: none;
  width: 100%;
  height: 45px;
  margin-top: 5px;
  border-bottom: 1px solid lightgray;
  :focus {
    outline: none;
  }
`;

export default function InputUnderline(props: IInput01Props) {
  return (
    <LoginInput
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
      onKeyUp={props.onKeyUp}
    />
  );
}
