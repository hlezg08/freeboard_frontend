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
  color: ${(props) => props.isActive && "#e9998a"};
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
  color: #e9998a;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props) => (props.disabled ? "lightgray" : "#faeae7")};
`;
export const LeftIcon = styled(LeftOutlined)`
  font-size: 18px;
  border-radius: 50%;
  padding: 10px;
  margin: 0px 10px;
  color: #e9998a;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props) => (props.disabled ? "#e2dbda" : "#faeae7")};
`;

export const RightIcon = styled(RightOutlined)`
  font-size: 18px;
  border-radius: 50%;
  padding: 10px;
  margin: 0px 10px;
  color: #e9998a;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props) => (props.disabled ? "#e2dbda" : "#faeae7")};
`;
export const DoubleRightIcon = styled(DoubleRightOutlined)`
  font-size: 18px;
  border-radius: 50%;
  padding: 10px;
  color: #e9998a;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props) => (props.disabled ? "lightgray" : "#faeae7")};
`;
