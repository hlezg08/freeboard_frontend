import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, isLoadedState } from "../../../commons/store";

// HOC
export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const [isLoaded, setIsLoaded] = useRecoilState(isLoadedState);

  // useEffect(() => {
  //   if (localStorage.getItem("logout")) {
  //     router.push("/login");
  //     Modal.error({
  //       content: "로그인을 먼저 해주세요",
  //     });
  //   }
  // }, []);

  // 권한분기 해결방법 2. 로딩하는 global state(isLoadedState) 만들어서 확인
  // 의존성 배열 필요
  useEffect(() => {
    if (isLoaded && !accessToken) {
      Modal.info({ content: "로그인 후 이용 가능합니다." });
      router.push("/login");
    }
  }, [isLoaded]);

  return <Component {...props} />;
};
