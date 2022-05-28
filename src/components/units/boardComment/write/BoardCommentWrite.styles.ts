import styled from "@emotion/styled";
import { RollbackOutlined } from "@ant-design/icons";

interface ICommentWrapperProps {
  isEdit: boolean;
}
export const Icon = styled.img`
  width: 45px;
  height: 45px;
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid lightgray;
  padding-bottom: 10px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const CommentTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 10px;
`;
export const CommentWrapper = styled.div`
  display: flex;
  width: ${(props: ICommentWrapperProps) => (props.isEdit ? "100%" : "80%")};
  flex-direction: column;
`;
export const CommentNotMemberWrapper = styled.div`
  padding-bottom: 10px;
`;
export const CommentNotMemberInput = styled.input`
  width: 150px;
  height: 35px;
  font-size: 14px;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid lightgray;
`;
export const RollBackButton = styled(RollbackOutlined)`
  padding: 0px 10px;
  color: gray;
`;
export const CommentTextarea = styled.textarea`
  min-height: 80px;
  font-size: 14px;
  padding: 10px;
  border: 1px solid lightgray;
`;
export const CommentAttach = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
`;
export const CommentButton = styled.button`
  width: 70px;
  height: 40px;
  font-size: 16px;
  background-color: #f9f9f9;
  :hover {
    cursor: pointer;
  }
  border-radius: 5px;
  border: none;
`;
