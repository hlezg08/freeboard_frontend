import styled from "@emotion/styled";
interface ILightPinkStyledProps {
  isActive: boolean;
}
interface IButtonLightpinkProps {
  type?: any;
  title: string;
  isActive?: boolean;
  isEdit?: boolean;
}
const LightPinkStyled = styled.button`
  align-items: center;
  border: none;
  width: auto;
  height: auto;
  font-size: 16px;
  padding: 10px 20px;
  background-color: ${(props: ILightPinkStyledProps) =>
    props.isActive ? "#faeae7" : "#f9f9f9"};
  border-radius: 5px;
  color: ${(props: ILightPinkStyledProps) =>
    props.isActive ? "#e9998a" : "gray"};
  :hover {
    cursor: pointer;
  }
`;

export default function ButtonLightpink(props: IButtonLightpinkProps) {
  return (
    <LightPinkStyled isActive={props.isEdit ? true : props.isActive}>
      {props.title}
    </LightPinkStyled>
  );
}
