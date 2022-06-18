import styled from "@emotion/styled";
const Textarea = styled.textarea`
  min-height: 80px;
  font-size: 14px;
  padding: 10px;
  border: 1px solid lightgray;
`;
export default function InputComment(props) {
  return (
    <Textarea
      onChange={props.onChange}
      maxLength={props.maxLength}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
    ></Textarea>
  );
}
