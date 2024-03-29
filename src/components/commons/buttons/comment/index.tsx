import styled from "@emotion/styled";
const ButtonCommentStyled = styled.button`
  width: 70px;
  height: 40px;
  font-size: 16px;
  background-color: #f9f9f9;
  :hover {
    cursor: pointer;
  }
  border-radius: 5px;
  border: none;
`;
interface ButtonProps {
  onClick?: () => void;
  title?: string;
  type?: string;
}
export default function ButtonComment(props: ButtonProps) {
  return (
    <ButtonCommentStyled onClick={props.onClick}>
      {props.title}
    </ButtonCommentStyled>
  );
}
