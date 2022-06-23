import styled from "@emotion/styled";
import { CloseOutlined } from "@material-ui/icons";
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
  :hover {
    cursor: pointer;
  }
`;
