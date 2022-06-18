import styled from "@emotion/styled";
const ButtonWhiteStyled = styled.button`
  width: 80px;
  height: 45px;
  background-color: white;
  border: 1px solid lightgray;
  margin: 10px;
  font-size: 16px;
  :hover {
    cursor: pointer;
  }
`;
export default function ButtonWhite(props) {
  return (
    <ButtonWhiteStyled onClick={props.onClick}>{props.title}</ButtonWhiteStyled>
  );
}
