import styled from "@emotion/styled";

export const TodayWrapper = styled.div`
  width: 150px;
  height: 400px;
  padding: 10px 0px;
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
`;

export const TodayItemWrapper = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #bdbdbd;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodayItemImg = styled.img`
  width: 100px;
  height: 100px;
  :hover {
    cursor: pointer;
  }
`;
