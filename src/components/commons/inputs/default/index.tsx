import styled from "@emotion/styled";

interface IInputDeafultProps {
  register?: any;
  type?: any;
  placeholder?: string;
  defaultValue?: any;
  value?: any;
  readOnly?: boolean;
}
const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px;
  border: 1px solid gray;
`;
export default function InputDefault(props: IInputDeafultProps) {
  return (
    <Input
      {...props.register}
      type={props.type}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      value={props.value}
      readOnly={props.readOnly}
    />
  );
}
