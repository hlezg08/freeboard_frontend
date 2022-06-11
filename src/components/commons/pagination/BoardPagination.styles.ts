import styled from "@emotion/styled";
import {
  LeftOutlined,
  RightOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";

interface IPageButtonProps {
  isActive: boolean;
}
export const PaginationWrapper = styled.div`
  height: 45px;
  text-align: center;
`;
export const PageButton = styled.button`
  padding: 0px 10px;
  width: 45px;
  height: 45px;
  font-size: 16px;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  color: ${(props: IPageButtonProps) => props.isActive && "#e9998a"};
  font-weight: ${(props: IPageButtonProps) => props.isActive && "bold"};
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
  background-color: #faeae7;
  display: ${(props) => props.disabled && "none"};
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
  background-color: #faeae7;
  display: ${(props) => props.disabled && "none"};
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
  background-color: #faeae7;
  display: ${(props) => props.disabled && "none"};
`;
export const DoubleRightIcon = styled(DoubleRightOutlined)`
  font-size: 18px;
  border-radius: 50%;
  padding: 10px;
  color: #e9998a;
  :hover {
    cursor: pointer;
  }
  background-color: #faeae7;
  display: ${(props) => props.disabled && "none"};
`;
