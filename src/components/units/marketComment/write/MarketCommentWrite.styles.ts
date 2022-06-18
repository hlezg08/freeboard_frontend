import styled from "@emotion/styled";
import { RollbackOutlined } from "@ant-design/icons";
interface ICommentWrapperProps {
  isEdit: boolean;
}
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
export const RollBackButton = styled(RollbackOutlined)`
  padding: 0px 10px;
  color: gray;
`;
export const CommentAttach = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
`;
