import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import {
  LayoutHeaderWrapper,
  LayoutHeaderLogo,
  LoggedInText,
  LayoutHeaderButton,
} from "./LayoutHeader.styles";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import { Modal } from "antd";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../../../units/login/Login.queries";

export default function LayoutHeader() {
  const { onClickMoveToPage } = useMoveToPage();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickLogout = () => {
    setAccessToken("");
    localStorage.removeItem("refreshToken");
    Modal.success({
      content: "로그아웃 되었습니다",
    });
  };

  return (
    <LayoutHeaderWrapper>
      <div onClick={onClickMoveToPage("/boards")}>
        <LayoutHeaderLogo src="../../icons/ic-cat-footprint.png" />
        <LayoutHeaderButton>집사마켓</LayoutHeaderButton>
      </div>

      <div>
        {accessToken && (
          <>
            <LoggedInText>
              {data?.fetchUserLoggedIn.name}님 환영합니다!
            </LoggedInText>
            <Link href="/point">
              <a>충전</a>
            </Link>
            <LayoutHeaderButton onClick={onClickLogout}>
              로그아웃
            </LayoutHeaderButton>
          </>
        )}
        {!accessToken && (
          <LayoutHeaderButton onClick={onClickMoveToPage("/login")}>
            로그인
          </LayoutHeaderButton>
        )}
      </div>
    </LayoutHeaderWrapper>
  );
}
