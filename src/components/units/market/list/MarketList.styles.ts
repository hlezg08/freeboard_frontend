import styled from "@emotion/styled";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 60px;
`;
export const BodyWrapper = styled.div`
  width: 100%;
`;
export const ListWrapper = styled.div`
  width: 100%;
  border-top: 1px solid gray;
`;
export const ListItemWrapper = styled.div`
  width: auto;
  height: 180px;
  display: flex;
  border-bottom: 1px solid gray;
  :hover {
    background-color: #f2f2f2;
  }
`;
export const ImageWrapper = styled.div`
  width: 180px;
  padding: 20px;
`;
export const Image = styled.img`
  width: 100%;
  max-height: 150px;
`;
export const TextWrapper = styled.div`
  width: 70%;
  padding: 20px 10px;
  :hover {
    cursor: pointer;
  }
`;
export const ItemName = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;
export const ItemRemarks = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
`;
export const ItemTags = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: lightgray;
`;
export const ItemPrice = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
`;
export const PriceWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
`;
export const SearchBarButtonWrapper = styled.div`
  padding: 10px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const PickFalseIcon = styled(HeartOutlined)``;
export const PickTrueIcon = styled(HeartFilled)`
  color: #eb2f96;
`;
