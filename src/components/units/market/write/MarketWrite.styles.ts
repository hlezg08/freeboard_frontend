import styled from "@emotion/styled";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const Header = styled.h1`
  display: flex;
  justify-content: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 60px 0px;
  padding: 60px;
  background-color: white;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
  border-radius: 15px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;
export const LocationWrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const LocationTextWrapper = styled.div`
  flex-grow: 1;
  padding-left: 10px;
`;
export const AddressWrapper = styled.div`
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0px;
`;
export const ZipCodeInput = styled.input`
  width: 80px;
  height: 45px;
  text-align: center;
  border-width: 1px;
  margin-right: 10px;
`;
export const ZipCodeWrapper = styled.div`
  display: flex;
  padding-bottom: 10px;
  width: 220px;
  justify-content: space-between;
`;
export const Label = styled.span`
  font-size: 20px;
  width: 30%;
  padding: 10px 0px;
`;
export const ImageWrapper = styled.div`
  display: flex;
`;
export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 15px 0px;
`;
export const Error = styled.div`
  color: red;
  font-size: 13px;
`;
export const TagsWrapper = styled.div`
  width: 100%;
  height: 45px;
  padding: 10px;
  border: 1px solid gray;
`;
