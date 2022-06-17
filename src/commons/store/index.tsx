import { atom } from "recoil";
import { v1 } from "uuid";
export const accessTokenState = atom({
  key: `accessTokenState/${v1()}`,
  default: "",
});
export const userInfoState = atom({
  key: `userInfoState/${v1()}`,
  default: { email: "", name: "" },
});
export const visitedPageState = atom({
  key: `visitedPageState/${v1()}`,
  default: "/",
});
