import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import {
  LayoutHeaderWrapper,
  LayoutHeaderLogo,
  LoggedInText,
  LayoutHeaderButton,
} from "./LayoutHeader.styles";
import { FETCH_USER_LOGGED_IN } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onClickMoveLandingPage = () => {
    router.push("/");
  };
  const onClickLogin = () => {
    router.push(`/login`);
  };
  const onClickLogout = () => {
    localStorage.removeItem("accessToken");
    setAccessToken("");
    router.push(`/`);
  };

  return (
    <LayoutHeaderWrapper>
      <div onClick={onClickMoveLandingPage}>
        <LayoutHeaderLogo src="../../icons/ic-cat-footprint.png" />
        <LayoutHeaderButton>집사마켓</LayoutHeaderButton>
      </div>

      <div>
        {accessToken && (
          <>
            <LoggedInText>
              {data?.fetchUserLoggedIn.name}님 환영합니다!
            </LoggedInText>
            <LayoutHeaderButton onClick={onClickLogout}>
              로그아웃
            </LayoutHeaderButton>
          </>
        )}
        {!accessToken && (
          <LayoutHeaderButton onClick={onClickLogin}>로그인</LayoutHeaderButton>
        )}
      </div>
    </LayoutHeaderWrapper>
  );
}
