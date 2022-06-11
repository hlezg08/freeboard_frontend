import styled from "@emotion/styled";
const Wrapper = styled.div`
  height: 60px;
  background-color: white;
  display: flex;
`;
const Link = styled.a`
  padding: 0px 10px;
`;
export default function LayoutFooter() {
  return (
    <Wrapper>
      <Link>개인정보취급방침</Link>
      <Link>이용약관</Link>
      <Link
        href="https://www.flaticon.com/kr/free-icons/"
        title="고양이 아이콘"
      >
        고양이 아이콘 제작자: Sergei Kokota - Flaticon
      </Link>
    </Wrapper>
  );
}
