import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
export const PageButton = styled.button`
  padding: 0px 5px;
  width: 40px;
  height: 40px;
  font-size: 16px;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  :hover {
    cursor: pointer;
    background-color: #e7dafc;
  }
  :focus {
    color: #8a4af3;
    font-weight: bold;
  }
`;
export const LeftIcon = styled(LeftOutlined)`
  font-size: 20px;
  border-radius: 50%;
  padding: 10px;
  color: #8a4af3;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props) => (props.disabled ? "lightgray" : "#e7dafc")};
`;
export const RightIcon = styled(RightOutlined)`
  font-size: 20px;
  border-radius: 50%;
  padding: 10px;
  color: #8a4af3;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props) => (props.disabled ? "lightgray" : "#e7dafc")};
`;
