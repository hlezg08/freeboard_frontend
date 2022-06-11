import axios from "axios";
import OpenApiPage from "../../src/components/units/openapi/OpenApi";
import { MyMenuWrapper } from "./styles";

export default function MyMenuPage() {
  const url = "https://cataas.com/cat/cute";
  // useEffect(() => {
  //   const result = axios.get("https://cataas.com/cat/cute/says/hello");
  //   console.log(result);
  // });
  return (
    <MyMenuWrapper url={url}>
      <OpenApiPage />
    </MyMenuWrapper>
  );
}
