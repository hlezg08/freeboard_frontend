import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

// HOC
export const withAuth = (Component) => (props) => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      router.push("/login");
      Modal.error({
        content: "로그인을 먼저 해주세요",
      });
    }
  }, []);
  return <Component {...props} />;
};
