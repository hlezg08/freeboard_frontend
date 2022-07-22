import styled from "@emotion/styled";
const ButtonWhiteStyled = styled.button`
  min-width: 80px;
  width: auto;
  height: 50px;
  background-color: white;
  border: 1px solid lightgray;
  padding: 10px;
  font-size: 16px;
  :hover {
    cursor: pointer;
  }
`;
interface ButtonWhiteProps {
  onClick?: () => void;
  title?: string;
  type?: string;
}
export default function ButtonWhite(props: ButtonWhiteProps) {
  return (
    <ButtonWhiteStyled onClick={props.onClick}>{props.title}</ButtonWhiteStyled>
  );
}
