import styled from "@emotion/styled";
interface IButtonBlackProps {
  type?: any;
  onClick?: any;
  title: string;
}
const SubmitButton = styled.button`
  width: 100%;
  height: auto;
  border: none;
  border-radius: 5px;
  background-color: #333333;
  color: white;
  padding: 10px 20px;
  :hover {
    cursor: pointer;
  }
  font-size: 16px;
`;
export default function ButtonBlack(props: IButtonBlackProps) {
  return (
    <SubmitButton type={props.type} onClick={props.onClick}>
      {props.title}
    </SubmitButton>
  );
}
