import * as S from "../login/Login.styles";
import { ISingupUIProps } from "./Signup.types";
export default function SignupUI(props: ISingupUIProps) {
  return (
    <S.Wrapper>
      <S.LoginHeader>SIGN UP</S.LoginHeader>
      <S.LoginBody>
        <S.LoginInputWrapper>
          <S.LoginTitle>이메일</S.LoginTitle>
          <S.LoginInput
            name="email"
            onChange={props.onChangeInputs}
            type="text"
            placeholder="이메일을 입력해주세요."
          />
          <S.Error>{props.errorEmail}</S.Error>
        </S.LoginInputWrapper>

        <S.LoginInputWrapper>
          <S.LoginTitle>이름</S.LoginTitle>
          <S.LoginInput
            name="name"
            onChange={props.onChangeInputs}
            type="text"
            placeholder="이름을 입력해주세요."
          />
          <S.Error>{props.errorName}</S.Error>
        </S.LoginInputWrapper>

        <S.LoginInputWrapper>
          <S.LoginTitle>비밀번호</S.LoginTitle>
          <S.LoginInput
            name="password"
            onChange={props.onChangeInputs}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <S.Error>{props.errorPassword}</S.Error>
        </S.LoginInputWrapper>

        <S.LoginInputWrapper>
          <S.LoginTitle>비밀번호 확인</S.LoginTitle>
          <S.LoginInput
            name="passwordAgain"
            onChange={props.onChangeInputs}
            type="password"
            placeholder="비밀번호를 한 번 더 입력해주세요."
          />
          <S.Error>{props.errorPasswordAgain}</S.Error>
        </S.LoginInputWrapper>

        <S.SubmitButton onClick={props.onClickSubmit}>회원가입</S.SubmitButton>
      </S.LoginBody>
    </S.Wrapper>
  );
}
