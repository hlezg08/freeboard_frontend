import styled from "@emotion/styled";
export const Wrapper = styled.div`
  width: 240px;
  height: 200px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
export const WeatherTemp = styled.span`
  display: block;
  font-size: 36px;
`;
export const WeatherPlace = styled.span`
  display: block;
  font-size: 24px;
  color: gray;
`;
export const WeatherMessage = styled.span`
  display: block;
  font-size: 20px;
`;
