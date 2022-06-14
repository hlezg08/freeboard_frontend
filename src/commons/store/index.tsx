import { atom } from "recoil";
export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
export const userInfoState = atom({
  key: "userInfoState",
  default: { email: "", name: "" },
});
export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});
