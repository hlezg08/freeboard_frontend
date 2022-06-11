import styled from "@emotion/styled";
const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px;
  border-width: 1px;
`;
export default function InputDefault(props) {
  return (
    <Input
      {...props.register}
      type={props.type}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      readOnly={props.readOnly}
    />
  );
}
