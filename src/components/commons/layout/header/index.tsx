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
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../../../units/login/Login.queries";
import Point from "../../../units/point/Point.container";

export default function LayoutHeader() {
  const { onClickMoveToPage } = useMoveToPage();
  const [visible, setVisible] = useState(false);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickLogout = () => {
    setAccessToken("");
    localStorage.removeItem("refreshToken");
    Modal.success({
      content: "로그아웃 되었습니다",
    });
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
