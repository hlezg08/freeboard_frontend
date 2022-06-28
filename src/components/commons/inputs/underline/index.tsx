import styled from "@emotion/styled";
import { KeyboardEvent } from "react";
interface IInputUnderlineProps {
  type: string;
  register: any;
  placeholder?: string;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
}
const InputStyle = styled.input`
  border: none;
  width: 100%;
  height: 45px;
  border-bottom: 1px solid lightgray;
  :focus {
    outline: none;
  }
  font-size: 16px;
`;

export default function InputUnderline(props: IInputUnderlineProps) {
  return (
    <InputStyle
      {...props.register}
      type={props.type}
      placeholder={props.placeholder}
      onKeyUp={props.onKeyUp}
    />
  );
}
