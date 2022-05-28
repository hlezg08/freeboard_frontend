import styled from "@emotion/styled";
const Wrapper = styled.div`
  height: 60px;
  background-color: lightgray;
`;
export default function LayoutFooter() {
  return (
    <Wrapper>
      <span>개인정보취급방침</span>
      <span>이용약관</span>
    </Wrapper>
  );
}
