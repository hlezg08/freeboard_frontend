import styled from "@emotion/styled";
import { RollbackOutlined } from "@ant-design/icons";
interface FormProps {
  isVisible: boolean;
}
export const Form = styled.form`
  display: ${(props: FormProps) => (props.isVisible ? "block" : "none")};
  padding: 10px 0px 0px 30px;
`;
export const CommentAttach = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
`;
export const RollBackButton = styled(RollbackOutlined)`
  padding: 0px 10px;
  color: gray;
`;
