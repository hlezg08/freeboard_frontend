import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

// HOC
export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (localStorage.getItem("logout")) {
      router.push("/login");
      Modal.error({
        content: "로그인을 먼저 해주세요",
      });
    }
  }, []);

  return <Component {...props} />;
};
