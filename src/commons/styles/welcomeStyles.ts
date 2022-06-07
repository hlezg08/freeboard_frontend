import styled from "@emotion/styled";

export const Body = styled.div`
  height: 800px;
  background-color: #fbf8f2;
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
`;
export const TextWrapper = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Title = styled.h1`
  font-size: 40px;
`;
export const SubTitle = styled.span`
  font-size: 16px;
  padding: 10px 0px;
`;
export const ClickBoardsButton = styled.button`
  width: 100px;
  height: 45px;
  font-size: 18px;
  border: none;
  background-color: #e9998a;
  color: white;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`;
export const ImageWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Image = styled.img`
  height: 400px;
`;
