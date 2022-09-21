import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 60rem;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginWrapper = styled.div`
  max-width: 45rem;
  width: 100%;
  height: 37.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
  border-radius: 15px;
  padding: 3.75rem;
`;
export const Header = styled.h1`
  font-size: 2rem;
`;
export const Form = styled.form`
  width: 100%;
  height: auto;
`;
export const InputWrapper = styled.div`
  padding: 0.625rem 0px;
`;
export const InputTitle = styled.span`
  font-size: 1.125rem;
`;

export const Checkbox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.625rem;
`;
export const LoginStatusWrapper = styled.div`
  padding: 0.625rem 0px;
  display: flex;
  align-items: center;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const LoginText = styled.span`
  padding: 0px 0.625rem;
  font-size: 1rem;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const Error = styled.span`
  color: red;
  font-size: 0.875rem;
`;
