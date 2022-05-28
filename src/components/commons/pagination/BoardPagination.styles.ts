import styled from "@emotion/styled";
import {
  LeftOutlined,
  RightOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";
export const PaginationWrapper = styled.div`
  text-align: center;
`;
export const PageButton = styled.button`
  padding: 0px 10px;
  width: 49px;
  height: 40px;
  font-size: 16px;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  color: ${(props) => props.isActive && "#8a4af3"};
  font-weight: ${(props) => props.isActive && "bold"};
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const DoubleLeftIcon = styled(DoubleLeftOutlined)`
  font-size: 18px;
  border-radius: 50%;
  padding: 10px;
  color: #8a4af3;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props) => (props.disabled ? "lightgray" : "#e7dafc")};
`;
export const LeftIcon = styled(LeftOutlined)`
  font-size: 18px;
  border-radius: 50%;
  padding: 10px;
  margin: 0px 10px;
  color: #8a4af3;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props) => (props.disabled ? "lightgray" : "#e7dafc")};
`;

export const RightIcon = styled(RightOutlined)`
  font-size: 18px;
  border-radius: 50%;
  padding: 10px;
  margin: 0px 10px;
  color: #8a4af3;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props) => (props.disabled ? "lightgray" : "#e7dafc")};
`;
export const DoubleRightIcon = styled(DoubleRightOutlined)`
  font-size: 18px;
  border-radius: 50%;
  padding: 10px;
  color: #8a4af3;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props) => (props.disabled ? "lightgray" : "#e7dafc")};
`;
