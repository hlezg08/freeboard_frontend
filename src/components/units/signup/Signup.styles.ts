import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SignupWrapper = styled.div`
  width: 740px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
  border-radius: 15px;
  padding: 50px;
`;
export const Header = styled.h1`
  font-size: 32px;
  margin: 0;
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
  padding: 10px 0px;
`;

export const Error = styled.span`
  color: red;
  font-size: 14px;
`;
export const LoginAlreadyWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0px;
`;
export const LoginText = styled.span`
  padding: 0px 10px;
  font-size: 16px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const Text = styled.span`
  padding: 0px 10px;
  font-size: 16px;
`;
