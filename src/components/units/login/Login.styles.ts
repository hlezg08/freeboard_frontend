import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginHeader = styled.h1``;
export const LoginBody = styled.div`
  width: 500px;
  height: 550px;
`;
export const LoginInputWrapper = styled.div`
  padding: 10px 0px;
`;
export const LoginTitle = styled.span``;
export const LoginInput = styled.input`
  border: none;
  width: 100%;
  height: 45px;
  margin-top: 5px;
  border-bottom: 1px solid lightgray;
  :focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 45px;
  border: none;
  background-color: #333333;
  color: white;
  margin-top: 30px;
  :hover {
    cursor: pointer;
  }
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
export const LoginItemWrapper = styled.div`
  padding: 15px 0px;
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
