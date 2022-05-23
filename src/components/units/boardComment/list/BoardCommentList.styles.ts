import styled from "@emotion/styled";
import { Rate } from "antd";
export const Icon = styled.img``;
export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`;
export const CommentComponent = styled.div`
  width: 100%;
  height: 120px;
  padding: 10px 0px;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: flex-start;
`;
export const CommentTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding-left: 10px;
`;
export const CommentWriterWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const CommentContentsWrapper = styled.div`
  height: 55px;
`;
export const CommentRate = styled(Rate)`
  font-size: 16px;
  margin-left: 10px;
`;
export const CommentDate = styled.span`
  color: #bdbdbd;
  font-size: 12px;
`;
export const CommentButton = styled.button`
  width: 50px;
  height: 35px;
  background-color: #f9f9f9;
  :hover {
    cursor: pointer;
  }
  border-radius: 5px;
  border: none;
  margin-left: 5px;
`;
