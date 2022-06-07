import { useEffect, useState } from "react";
import axios from "axios";
import WeatherPage from "../../src/components/units/weather/Weather";
import { MyMenuWrapper } from "./styles";
export default function MyMenuPage() {
  const url = "https://cataas.com/cat/cute";
  // useEffect(() => {
  //   const result = axios.get("https://cataas.com/cat/cute/says/hello");
  //   console.log(result);
  // });
  return (
    <MyMenuWrapper url={url}>
      <WeatherPage />
    </MyMenuWrapper>
  );
}
