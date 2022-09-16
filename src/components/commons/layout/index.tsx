import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import Head from "next/head";

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_BANNER = ["/", "/login/", "/signup/"];
const LayoutBody = styled.div`
  width: 100%;
  background-color: #f8f8f8;
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const ICON_LINK = "icons/ic-cat-footprint.png";
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  return (
    <>
      <Head>
        <title>집사마켓</title>
        <link rel="icon" href={ICON_LINK} />
      </Head>
      <LayoutHeader />
      {!isHiddenBanner && (
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
