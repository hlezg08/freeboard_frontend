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
  margin: 30px 0px;
  padding: 30px;
  border: 1px solid lightgray;
`;
export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;
export const LatLngWrapper = styled.div`
  display: flex;
  padding: 10px 0px;
`;
export const LocationWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const LocationTextWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;
export const AddressWrapper = styled.div`
  padding: 10px 0px;
`;
export const Label = styled.span`
  font-size: 13pt;
  padding: 10px 0px;
`;
export const LabelSmall = styled.span`
  font-size: 16px;
  padding-bottom: 10px;
`;
export const ImageWrapper = styled.div`
  display: flex;
`;
export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const RadioButton = styled.input`
  width: 15px;
  height: 15px;
`;
export const RadioLabel = styled.label`
  font-size: 13pt;
  padding: 0px 5px;
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
