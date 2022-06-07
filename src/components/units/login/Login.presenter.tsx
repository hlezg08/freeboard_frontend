import * as S from "./Login.styles";
import { ILoginUIProps } from "./Login.types";
export default function LoginUI(props: ILoginUIProps) {
  return (
    <S.Wrapper>
      <S.LoginHeader>MEMBER LOGIN</S.LoginHeader>
      <S.LoginBody>
        <S.LoginInputWrapper>
          <S.LoginTitle>이메일</S.LoginTitle>
          <S.LoginInput
            name="email"
            onChange={props.onChangeInputs}
            type="text"
          />
          <S.Error>{props.errorEmail}</S.Error>
        </S.LoginInputWrapper>
        <S.LoginInputWrapper>
          <S.LoginTitle>비밀번호</S.LoginTitle>
          <S.LoginInput
            name="password"
            onChange={props.onChangeInputs}
            type="password"
          />
          <S.Error>{props.errorPassword}</S.Error>
        </S.LoginInputWrapper>

        <S.LoginStatusWrapper>
          <S.Checkbox type="checkbox" />
          <span>로그인 상태 유지</span>
        </S.LoginStatusWrapper>

        <S.SubmitButton onClick={props.onClickSubmit}>로그인</S.SubmitButton>

        <S.LoginItemWrapper>
          <S.LoginText>아이디 찾기</S.LoginText>
          <span>|</span>
          <S.LoginText>비밀번호 찾기</S.LoginText>
          <span>|</span>
          <S.LoginText onClick={props.onClickSignup}>회원가입</S.LoginText>
        </S.LoginItemWrapper>
      </S.LoginBody>
    </S.Wrapper>
  );
}
