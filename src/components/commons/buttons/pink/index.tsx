import styled from "@emotion/styled";
const ButtonPinkStyled = styled.button`
  width: auto;
  height: 45px;
  background-color: #e9998a;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  padding: 0px 10px;
  :hover {
    cursor: pointer;
  }
`;

export default function ButtonPink(props) {
  return (
    <ButtonPinkStyled onClick={props.onClick}>{props.title}</ButtonPinkStyled>
  );
}
