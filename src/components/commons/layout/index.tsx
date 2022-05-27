import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

interface ILayoutProps {
  children: ReactNode;
}

//const HIDDEN_HEADERS = ["/12-04-state-prev", "/12-05-modal-refactoring"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  //const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <div>{props.children}</div>
      <LayoutFooter />
    </>
  );
}
