import { withAuth } from "../../src/components/commons/hocs/withAuth";

function MyPagesPage() {
  return <div>마이페이지</div>;
}

// 로그인이 필요할 때 === 토큰 있는지 확인 후 마이페이지 렌더링
export default withAuth(MyPagesPage);
