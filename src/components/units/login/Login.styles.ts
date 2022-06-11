import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.h1``;
export const Form = styled.form`
  width: 500px;
  height: auto;
`;
export const InputWrapper = styled.div`
  padding: 10px 0px;
`;
export const InputTitle = styled.span``;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
export const LoginStatusWrapper = styled.div`
  padding: 15px 0px;
  display: flex;
  align-items: center;
`;
export const LoginFooterWrapper = styled.div`
  padding: 15px 0px;
  display: flex;
  justify-content: center;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const LoginText = styled.span`
  margin: 0px 10px;
  :hover {
    cursor: pointer;
  }
`;
export const Error = styled.span`
  color: red;
  font-size: 12px;
`;
