import styled from "@emotion/styled";
const Wrapper = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
`;
export default function LayoutHeader() {
  return (
    <Wrapper>
      <a href="/boards">로고</a>
      <div>
        <a href="/login">로그인</a>
        <a>회원가입</a>
      </div>
    </Wrapper>
  );
}
