import { withAuth } from "../../../../src/components/commons/hocs/withAuth";
import MyPageProfilePassword from "../../../../src/components/units/mypage/profile/password/MyPageProfilePassword.container";

function MyPageProfilePasswordPage() {
  return <MyPageProfilePassword />;
}
export default withAuth(MyPageProfilePasswordPage);
