import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import {
  LayoutHeaderWrapper,
  LayoutHeaderLogo,
  LoggedInText,
  LayoutHeaderButton,
} from "./LayoutHeader.styles";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import { Modal } from "antd";

export default function LayoutHeader() {
  const { onClickMoveToPage } = useMoveToPage();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo] = useRecoilState(userInfoState);

  const onClickLogout = () => {
    localStorage.removeItem("accessToken");
    setAccessToken("");
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
            {/* <LoggedInText>
              {JSON.parse(localStorage.getItem("userInfo")).name}님 환영합니다!
            </LoggedInText> */}
            <LoggedInText>{userInfo.name}님 환영합니다!</LoggedInText>
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
