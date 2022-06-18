import styled from "@emotion/styled";
import {
  MessageOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0px;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: flex-start;
`;
export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding-left: 10px;
`;
export const UserNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const UserName = styled.span`
  font-weight: bold;
  font-size: 16px;
  padding-right: 10px;
`;
export const ButtonWrapper = styled.div``;
export const AnswerButton = styled(MessageOutlined)`
  font-size: 18px;
  color: #bdbdbd;
`;
export const CommentEditButton = styled(EditOutlined)`
  font-size: 18px;
  color: #bdbdbd;
`;
export const CommentDeleteButton = styled(DeleteOutlined)`
  font-size: 18px;
  color: #bdbdbd;
`;
export const CommentContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const CommentContents = styled.span`
  height: 65px;
`;
export const CommentDate = styled.span`
  color: #bdbdbd;
  font-size: 12px;
`;
