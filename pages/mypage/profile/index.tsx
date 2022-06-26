import styled from "@emotion/styled";
import ButtonBlack from "../../../src/components/commons/buttons/black";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import { useMoveToPage } from "../../../src/components/commons/hooks/useMoveToPage";
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
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <Wrapper>
      <MypageSidebar />
      <Contents>
        <ButtonBlack
          title="비밀번호 변경"
          onClick={onClickMoveToPage(`/mypage/profile/password`)}
        />
      </Contents>
    </Wrapper>
  );
}
// // 로그인이 필요할 때 === 토큰 있는지 확인 후 마이페이지 렌더링
export default withAuth(MyPageProfilePage);
