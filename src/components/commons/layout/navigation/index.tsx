import { Wrapper, Button } from "./LayoutNavigation.styles";
import { Fragment } from "react";
import { useMoveToPage } from "../../hooks/useMoveToPage";

export default function LayoutNavigation() {
  const { onClickMoveToPage } = useMoveToPage();

  const NAVIGATION_MENUS = [
    { name: "게시판", page: "/boards" },
    { name: "마이페이지", page: "/mypage/market" },
    { name: "중고마켓", page: "/market" },
  ];

  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.name}>
          <Button onClick={onClickMoveToPage(el.page)}>{el.name}</Button>
        </Fragment>
      ))}
    </Wrapper>
  );
}
