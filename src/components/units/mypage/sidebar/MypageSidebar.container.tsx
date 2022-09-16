import * as S from "./MyPageSidebar.styles";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../../../units/login/Login.queries";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { Fragment } from "react";
import { Avatar } from "@mui/material";

export default function MypageSidebar() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { onClickMoveToPage } = useMoveToPage();
  const SIDEBAR_MENUS = [
    { name: "마이 마켓", page: "/mypage/market" },
    { name: "마이 포인트", page: "/mypage/point" },
    { name: "마이 프로필", page: "/mypage/profile" },
  ];

  return (
    <S.SidebarWrapper>
      <S.Title1>MY PAGE</S.Title1>
      <S.ProfileWrapper>
        <Avatar
          alt="default-avatar"
          src="../../icons/ic-profile.svg"
          sx={{ width: 50, height: 50 }}
        />
        <S.Title1>{data?.fetchUserLoggedIn.name}</S.Title1>
        <S.Text>{data?.fetchUserLoggedIn.userPoint.amount}P</S.Text>
      </S.ProfileWrapper>
      <S.SidebarNavigationWrapper>
        {SIDEBAR_MENUS.map((el) => (
          <Fragment key={el.name}>
            <S.SidebarNavigationItem onClick={onClickMoveToPage(el.page)}>
              {el.name}
            </S.SidebarNavigationItem>
          </Fragment>
        ))}
      </S.SidebarNavigationWrapper>
    </S.SidebarWrapper>
  );
}
