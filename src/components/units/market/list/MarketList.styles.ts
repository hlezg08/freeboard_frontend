import styled from "@emotion/styled";
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 60px;
`;
export const BodyWrapper = styled.div`
  width: 100%;
  border-top: 1px solid gray;
`;
export const BodyItemWrapper = styled.div`
  width: auto;
  height: 180px;
  padding: 20px;
  display: flex;
  border-bottom: 1px solid gray;
`;
export const ImageWrapper = styled.div`
  width: 15%;
`;
export const TextWrapper = styled.div`
  width: 75%;
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
  width: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  padding: 30px 0px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
