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

const DISPLAY_BANNER = ["/boards"];
const HIDDEN_BANNER = ["/", "/login", "/signup"];
const LayoutBody = styled.div`
  width: 100%;
  background-color: #f8f8f8;
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isDisplayBanner = DISPLAY_BANNER.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  return (
    <>
      <LayoutHeader />
      {isDisplayBanner && (
        <div>
          <LayoutBanner />
        </div>
      )}
      {!isHiddenBanner && (
        <div>
          <LayoutNavigation />
        </div>
      )}

      <LayoutBody>{props.children}</LayoutBody>
      <LayoutFooter />
    </>
  );
}
