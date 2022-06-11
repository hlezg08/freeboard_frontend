import { Wrapper, Button } from "./LayoutNavigation.styles";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function LayoutNavigation() {
  const router = useRouter();
  const NAVIGATION_MENUS = [
    { name: "커뮤니티", page: "/community" },
    { name: "현재 날씨", page: "/openapi" },
    { name: "게시판", page: "/boards" },
    { name: "마이페이지", page: "/mypages" },
    { name: "중고마켓", page: "/market" },
  ];
  const onClickPage = (event) => {
    router.push(event.target.id);
  };

  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.name}>
          <Button id={el.page} onClick={onClickPage}>
            {el.name}
          </Button>
        </Fragment>
      ))}
    </Wrapper>
  );
}
