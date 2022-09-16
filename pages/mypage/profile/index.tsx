import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
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
  display: grid;
  gap: 1.5rem;
`;
const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      email
      name
    }
  }
`;

function MyPageProfilePage() {
  const { onClickMoveToPage } = useMoveToPage();
  const [updateUser] = useMutation(UPDATE_USER);
  const [name, setName] = useState("");
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onClickSubmit = async () => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            name,
          },
        },
      });
      alert("변경되었습니다!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Wrapper>
      <MypageSidebar />
      <Contents>
        <div>
          <ButtonBlack
            title="비밀번호 변경"
            onClick={onClickMoveToPage(`/mypage/profile/password`)}
          />
        </div>
        <div>
          <input
            onChange={onChangeName}
            placeholder="변경할 닉네임을 입력하세요."
          />
          <ButtonBlack onClick={onClickSubmit} title="정보 변경" />
        </div>
      </Contents>
    </Wrapper>
  );
}

export default withAuth(MyPageProfilePage);
