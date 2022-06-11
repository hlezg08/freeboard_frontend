import { useState } from "react";
import * as S from "./OpenApi.styles";
export default function OpenApiPage() {
  const API_KEY = "5ea63a1c8d1fb0e6cae39d3f3bb36bfb";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=seoul&units=metric&lang=kr&appid=${API_KEY}`;

  const [message, setMessage] = useState("");
  const [temp, setTemp] = useState("");
  const [place, setPlace] = useState("");

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      setMessage(json.weather[0].description);
      setTemp(json.main.temp);
      setPlace(json.name);
    });

  return (
    <S.Wrapper>
      <S.WeatherPlace>{place}의 날씨는</S.WeatherPlace>
      <S.WeatherMessage>{message}</S.WeatherMessage>
      <S.WeatherTemp>{temp}℃</S.WeatherTemp>
    </S.Wrapper>
  );
}
