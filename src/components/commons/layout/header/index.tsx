import styled from "@emotion/styled";
import { useRouter } from "next/router";
const Wrapper = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background-color: white;
`;
const LoginButton = styled.button`
  width: 80px;
  height: 50px;
  border: none;
  color: black;
  background-color: white;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export default function LayoutHeader() {
  const router = useRouter();
  const onClickLogin = () => {
    router.push("/login");
  };
  return (
    <Wrapper>
      <a href="/boards">로고</a>
      <div>
        <LoginButton onClick={onClickLogin}>로그인</LoginButton>
      </div>
    </Wrapper>
  );
}
