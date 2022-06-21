import styled from "@emotion/styled";
const Textarea = styled.textarea`
  width: 100%;
  min-height: 80px;
  font-size: 14px;
  padding: 10px;
  border: 1px solid lightgray;
`;
export default function InputComment(props) {
  return (
    <Textarea
      {...props.register}
      onChange={props.onChange}
      maxLength={props.maxLength}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
    ></Textarea>
  );
}
