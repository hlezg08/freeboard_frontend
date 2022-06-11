import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_HEADERS = ["/"];
const HIDDEN_BANNERS = ["/", "/login"];
const LayoutBody = styled.div`
  width: 100%;
  background-color: white;
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      <LayoutHeader />
      {!isHiddenHeader && (
        <div>
          <LayoutBanner />
          <LayoutNavigation />
        </div>
      )}
      <LayoutBody>{props.children}</LayoutBody>
      <LayoutFooter />
    </>
  );
}
