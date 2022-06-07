import styled from "@emotion/styled";
import WeatherPage from "../../../units/weather/Weather";
const Wrapper = styled.div`
  width: 200px;
  height: auto;
  background-color: #faeae7;
  display: flex;
  flex-direction: column;
`;
export default function LayoutSidebar() {
  return (
    <Wrapper>
      <WeatherPage></WeatherPage>
    </Wrapper>
  );
}
