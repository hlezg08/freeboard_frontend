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
  padding: 15px 0px;
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
  font-size: 14px;
  color: #828282;
`;
export const IconWrapper = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-around;
`;
export const Icon = styled.img``;

export const Hr = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid lightgray;
`;

export const DetailBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 30px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;
export const Title = styled.h1`
  display: flex;
  padding-top: 30px;
`;
export const ImgWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const Img = styled.img`
  width: 100%;
  height: auto;
`;

export const Contents = styled.p`
  width: 100%;
  height: auto;
`;

export const YoutubeWrapper = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: center;
`;

export const ThumbWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0px;
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
  color: #e99988;
`;
export const ThumbDownText = styled.span`
  color: #828282;
`;
export const LikeIcon = styled(LikeOutlined)`
  font-size: 24px;
  color: #e99988;
`;
export const DisLikeIcon = styled(DislikeOutlined)`
  font-size: 24px;
  color: #828282;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 20px;
`;
