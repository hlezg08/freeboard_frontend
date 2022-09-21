import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import * as S from "./LayoutHeader.styles";
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
    <>
      <S.LayoutHeaderWrapper>
        <S.LayoutLogoWrapper onClick={onClickMoveToPage("/boards")}>
          <S.LogoImg src="../../icons/ic-cat-footprint.png" />
          <S.HeaderButton>집사마켓</S.HeaderButton>
        </S.LayoutLogoWrapper>

        <div>
          {accessToken && (
            <>
              <S.LoggedInText>
                {data?.fetchUserLoggedIn.name}님 환영합니다!
              </S.LoggedInText>
              <S.HeaderButton onClick={onClickShowPointModal}>
                충전
              </S.HeaderButton>
              <S.HeaderButton onClick={onClickLogout}>로그아웃</S.HeaderButton>
            </>
          )}
          {!accessToken && (
            <S.HeaderButton onClick={onClickMoveToPage("/login")}>
              로그인
            </S.HeaderButton>
          )}
        </div>
      </S.LayoutHeaderWrapper>
      {visible && <Point setVisible={setVisible} />}
    </>
  );
}
