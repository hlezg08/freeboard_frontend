import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, isLoadedState } from "../../../commons/store";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const [isLoaded] = useRecoilState(isLoadedState);

  useEffect(() => {
    if (isLoaded && !accessToken) {
      Modal.info({ content: "로그인 후 이용 가능합니다." });
      router.push("/login");
    }
  }, [isLoaded]);

  return <Component {...props} />;
};
