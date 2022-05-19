import styled from "@emotion/styled";

export const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

export const WriterWrapper = styled.div`
  display: flex;
`;

export const WriterText = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`;
export const WriterName = styled.span`
  font-size: 24px;
`;

export const Date = styled.span`
  font-size: 16px;
  color: #828282;
`;
export const IconWrapper = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-around;
`;
export const Icon = styled.img``;
export const Hr = styled.hr`
  width: 100%;
  color: lightgray;
`;

export const DetailBody = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  display: flex;
  padding-top: 30px;
`;
export const ImgWrapper = styled.img`
  width: 100%;
  height: 500px;
`;

export const Contents = styled.p`
  width: 100%;
  height: 240px;
`;

export const YoutubeWrapper = styled.div`
  height: 240px;
  margin: 20px 0px;
  display: flex;
  justify-content: center;
`;
export const Youtube = styled.iframe`
  width: 480px;
  border: none;
`;

export const ThumbWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 30px;
`;
export const ThumbUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 10px;
`;
export const ThumbDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 10px;
`;

export const ThumbUpText = styled.span`
  color: #ffd600;
`;
export const ThumbDownText = styled.span`
  color: #828282;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const Button = styled.button`
  width: 180px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
`;
