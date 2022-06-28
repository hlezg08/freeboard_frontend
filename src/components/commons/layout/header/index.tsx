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
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_USER_LOGGED_IN,
  LOGOUT_USER,
} from "../../../units/login/Login.queries";
import Point from "../../../units/point/Point.container";

export default function LayoutHeader() {
  const { onClickMoveToPage } = useMoveToPage();
  const [visible, setVisible] = useState(false);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation(LOGOUT_USER);

  const onClickLogout = async () => {
    try {
      setAccessToken("");
      // localStorage.removeItem("refreshToken");
      const result = await logoutUser();
      localStorage.setItem("logout", String(result.data?.logoutUser));
      Modal.success({
        content: "로그아웃 되었습니다",
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickShowPointModal = () => {
    setVisible(true);
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
            <LayoutHeaderButton onClick={onClickShowPointModal}>
              충전
            </LayoutHeaderButton>
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
      {visible && <Point setVisible={setVisible} />}
    </LayoutHeaderWrapper>
  );
}
