import styled from "@emotion/styled";
export const App = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 100%;
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 10px;
`;

export const Label = styled.span`
  font-size: 13pt;
  margin: 10px 0px;
`;
export const Text = styled.input`
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  padding: 5px;
`;
export const TextLarge = styled.input`
  height: 400px;
  margin-bottom: 20px;
  padding: 5px;
`;
export const PostCode = styled.input`
  width: 80px;
  height: 45px;
  margin-bottom: 20px;
  padding: 5px;
`;
export const PostCodeGroup = styled.div`
  display: flex;
`;
export const SearchBtn = styled.button`
  background-color: black;
  color: white;
  height: 45px;
  margin-left: 20px;
`;
export const PhotoGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const Photo = styled.div`
  width: 78px;
  height: 78px;
  background-color: lightgray;
  border: none;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

export const RadioGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;
export const RadioInput = styled.input`
  width: 15px;
  height: 15px;
`;
export const RadioLabel = styled.label`
  font-size: 13pt;
  padding: 0px 5px;
`;
export const SubmitGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const SubmitBtn = styled.button`
  align-items: center;
  background-color: #ffd600;
  border: none;
  width: 180px;
  height: 50px;
  font-size: 15px;
`;
