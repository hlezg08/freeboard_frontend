import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginWrapper = styled.div`
  width: 740px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
  border-radius: 15px;
  padding: 70px;
`;
export const Header = styled.h1`
  font-size: 32px;
`;
export const Form = styled.form`
  width: 500px;
  height: auto;
`;
export const InputWrapper = styled.div`
  padding: 10px 0px;
`;
export const InputTitle = styled.span`
  font-size: 18px;
`;

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
  padding: 0px 10px;
  font-size: 16px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const Error = styled.span`
  color: red;
  font-size: 14px;
`;
