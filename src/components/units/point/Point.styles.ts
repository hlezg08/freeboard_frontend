import styled from "@emotion/styled";
import { Clear } from "@material-ui/icons";
export const Wrapper = styled.div`
  width: 464px;
  border-radius: 20px;
  position: absolute;
  background-color: #ffffff;
  left: 50vh;
  top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid #cccccc;
`;
export const CancelIcon = styled(Clear)`
  width: 20px;
  margin-left: 400px;
  cursor: pointer;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
`;
export const PointWrapper = styled.div`
  margin-top: 20px;
`;
export const SelectWrapper = styled.div`
  padding: 10px;
  width: 350px;
  height: 40px;
  font-size: 16px;
  color: #828282;
  border: none;
  border-bottom: 2px solid;
  background-repeat: no-repeat;
  background-image: url("https://img.icons8.com/material-rounded/24/000000/expand-arrow.png");
  background-position: right;
  cursor: pointer;
  display: inline-block;
`;
export const SelctedPrice = styled.div`
  font-size: 18px;
  line-height: 27px;
  color: #4f4f4f;
`;
interface IsSelctProps {
  isSelect: boolean;
}
export const ListWrapper = styled.ul`
  cursor: pointer;
  background-color: white;
  display: ${(props: IsSelctProps) => props.isSelect || "none"};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: 15px 0px;
  padding-left: 0px;
  border-radius: 10px;
`;

export const List = styled.li`
  padding: 20px;
  // margin-top: 10px;
  list-style: none;
  color: #828282;
  border-bottom: 1px solid #e0e0e0;
  &:hover {
    font-weight: 700;
    color: black;
  }
`;
export const SubmitButton = styled.button`
  background-color: #e9998a;
  color: #ffffff;
  width: 350px;
  height: 40px;
  text-align: center;
  padding: 10px;
  border: none;
  margin: 30px 0px;
  border-radius: 10px;
  cursor: pointer;
`;
