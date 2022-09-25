import styled from "@emotion/styled";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
export const Wrapper = styled.div`
  width: 100%;
  max-width: 25rem;
  height: 320px;
  display: flex;
  flex-direction: column;
  border: 1px solid #555555;
  background: #ffffff;
  :hover {
    cursor: pointer;
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 221px;
`;
export const TextWrapper = styled.div`
  width: auto;
  height: 98px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`;
export const TextDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
`;
export const Content1Text = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
`;
export const Content2Text = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #a9a9a9;
`;
export const PickFalseIcon = styled(HeartOutlined)``;
export const PickTrueIcon = styled(HeartFilled)`
  color: #eb2f96;
`;
