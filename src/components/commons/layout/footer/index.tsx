import styled from "@emotion/styled";
const Wrapper = styled.div`
  height: 60px;
  background-color: white;
`;
export default function LayoutFooter() {
  return (
    <Wrapper>
      <a>개인정보취급방침</a>
      <a>이용약관</a>
    </Wrapper>
  );
}
