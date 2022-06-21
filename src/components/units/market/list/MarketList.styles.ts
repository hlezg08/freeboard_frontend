import styled from "@emotion/styled";
import { CloseOutlined, HeartOutlined } from "@ant-design/icons";
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 60px;
`;
export const BodyWrapper = styled.div`
  display: flex;
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
  width: 200px;
  padding: 20px;
`;
export const Image = styled.img`
  width: 100%;
  max-height: 150px;
`;
export const TextWrapper = styled.div`
  width: 75%;
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
  width: auto;
  min-width: 150px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
`;
export const ButtonWrapper = styled.div`
  padding: 10px 0px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const PickIcon = styled(HeartOutlined)`
  :hover {
    cursor: default;
  }
`;

export const TodayWrapper = styled.div`
  position: sticky;
  width: 180px;
  height: 480px;
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TodayItemWrapper = styled.div`
  width: 120px;
  border: 1px solid #bdbdbd;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TodayItemImg = styled.img`
  width: 100px;
  height: 100px;
`;
export const DeleteIcon = styled(CloseOutlined)`
  position: absolute;
  right: 10px;
  :hover {
    cursor: pointer;
  }
`;
