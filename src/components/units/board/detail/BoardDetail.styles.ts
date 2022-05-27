import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;
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
`;

export const DetailBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 30px 0px;
  padding: 30px;
  border: 1px solid lightgray;
`;
export const Title = styled.h1`
  display: flex;
  padding-top: 30px;
`;
export const ImgWrapper = styled.img`
  width: 100%;
  height: 400px;
`;

export const Contents = styled.p`
  width: 100%;
  height: 240px;
`;

export const YoutubeWrapper = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: center;
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
  color: #009f47;
`;
export const ThumbDownText = styled.span`
  color: #828282;
`;
export const LikeIcon = styled(LikeOutlined)`
  font-size: 24px;
  color: #009f47;
`;
export const DisLikeIcon = styled(DislikeOutlined)`
  font-size: 24px;
  color: #828282;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 10px 0px;
`;
export const Button = styled.button`
  width: 80px;
  height: 45px;
  background-color: #f9f9f9;
  border-radius: 5px;
  border: none;
  margin: 10px;
  font-size: 16px;
  :hover {
    cursor: pointer;
  }
`;
