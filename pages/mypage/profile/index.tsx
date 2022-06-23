import styled from "@emotion/styled";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import MypageSidebar from "../../../src/components/units/mypage/sidebar/MypageSidebar.container";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 80px;
`;
const Contents = styled.div`
  width: 100%;
`;

function MyPageProfilePage() {
  return (
    <Wrapper>
      <MypageSidebar />
      <Contents></Contents>
    </Wrapper>
  );
}
// // 로그인이 필요할 때 === 토큰 있는지 확인 후 마이페이지 렌더링
export default withAuth(MyPageProfilePage);
