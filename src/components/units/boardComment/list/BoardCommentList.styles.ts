import styled from "@emotion/styled";
import { Rate } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const Icon = styled.img``;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const CommentWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
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
  justify-content: space-between;
  align-items: center;
`;
export const CommentWriter = styled.span`
  font-weight: bold;
  font-size: 16px;
  padding-right: 10px;
`;
export const CommentContentsWrapper = styled.div`
  height: 55px;
`;
export const CommentRate = styled(Rate)`
  font-size: 16px;
`;
export const CommentDate = styled.span`
  color: #bdbdbd;
  font-size: 12px;
`;
export const CommentButtonWrapper = styled.div``;
export const CommentEditButton = styled(EditOutlined)`
  font-size: 18px;
  color: #bdbdbd;
`;
export const CommentDeleteButton = styled(DeleteOutlined)`
  font-size: 18px;
  color: #bdbdbd;
`;
