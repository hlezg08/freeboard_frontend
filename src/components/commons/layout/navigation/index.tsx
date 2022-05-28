import styled from "@emotion/styled";
import { useRouter } from "next/router";
const Wrapper = styled.nav`
  height: 60px;
  background-color: #8a4af3;
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  color: white;
  font-size: 20px;
  background-color: transparent;
  border: none;
  :hover {
    cursor: pointer;
    color: yellow;
  }
`;
export default function LayoutNavigation() {
  const router = useRouter();
  const onClickBoards = () => {
    router.push("/boards");
  };
  const onClickMyPage = () => {
    router.push("/mypages");
  };
  return (
    <Wrapper>
      <Button onClick={onClickBoards}>리뷰게시판</Button>
      <Button onClick={onClickMyPage}>마이페이지</Button>
    </Wrapper>
  );
}
