import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { LOGIN_USER } from "./Login.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as S from "./Login.styles";
import { KeyboardEvent } from "react";
import InputUnderline from "../../commons/inputs/underline";
import ButtonBlack from "../../commons/buttons/black";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    // .matches(
    //   /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,16}$/,
    //   "비밀번호는 반드시 8~16자이며, 영문, 숫자,특수문자를 포함해야합니다."
    // )
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
    .required("비밀번호는 필수 입력 사항입니다."),
});

export default function Login() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [loginUser] = useMutation(LOGIN_USER);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onClickSubmit = async (data) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      // 액세스 토큰을 global state에 저장
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      Modal.success({
        content: "로그인 성공!",
      });
      router.push("/boards");
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  };

  const onClickSignup = () => {
    router.push(`/signup`);
  };

  const onEnterPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit(onClickSubmit);
    }
  };

  return (
    <S.Wrapper>
      <S.Header>MEMBER LOGIN</S.Header>

      <S.Form onSubmit={handleSubmit(onClickSubmit)}>
        <S.InputWrapper>
          <S.InputTitle>이메일</S.InputTitle>
          <InputUnderline
            onKeyUp={onEnterPress}
            type="text"
            register={register("email")}
          />
          <S.Error>{formState.errors.email?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputTitle>비밀번호</S.InputTitle>
          <InputUnderline
            onKeyUp={onEnterPress}
            type="password"
            register={register("password")}
          />
          <S.Error>{formState.errors.password?.message}</S.Error>
        </S.InputWrapper>

        <S.LoginStatusWrapper>
          <S.Checkbox type="checkbox" />
          <span>로그인 상태 유지</span>
        </S.LoginStatusWrapper>
        <S.ButtonWrapper>
          <ButtonBlack title="로그인" />
        </S.ButtonWrapper>
      </S.Form>

      <S.LoginFooterWrapper>
        <S.LoginText>아이디 찾기</S.LoginText>
        <span>|</span>
        <S.LoginText>비밀번호 찾기</S.LoginText>
        <span>|</span>
        <S.LoginText onClick={onClickSignup}>회원가입</S.LoginText>
      </S.LoginFooterWrapper>
    </S.Wrapper>
  );
}
