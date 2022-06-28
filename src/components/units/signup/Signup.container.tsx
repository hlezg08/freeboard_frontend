import { Modal } from "antd";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import * as S from "./Signup.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputUnderline from "../../commons/inputs/underline";
import ButtonBlack from "../../commons/buttons/black";
import { CREATE_USER } from "./Signup.queries";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  name: yup
    .string()
    .min(2, "이름은 최소 2자리 이상 입력해주세요.")
    .required("이름은 필수 입력 사항입니다."),
  password: yup
    .string()
    // .matches(
    //   /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,16}$/,
    //   "비밀번호는 반드시 8~16자이며, 영문, 숫자,특수문자를 포함해야합니다."
    // )
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
    .required("비밀번호는 필수 입력 사항입니다."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
});

export default function Signup() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { onClickMoveToPage } = useMoveToPage();

  const onClickSubmit = async (data) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            name: data.name,
            password: data.password,
          },
        },
      });
      Modal.success({
        content: "회원가입을 축하합니다",
      });

      router.push(`/login`);
    } catch (error) {
      console.log({ ...data });
      Modal.error({
        content: error.message,
      });
    }
  };

  return (
    <S.Wrapper>
      <S.SignupWrapper>
        <S.Header>SIGN UP</S.Header>
        <S.Form onSubmit={handleSubmit(onClickSubmit)}>
          <S.InputWrapper>
            <S.InputTitle>이메일</S.InputTitle>
            <InputUnderline
              type="text"
              register={register("email")}
              placeholder="이메일을 입력해주세요."
            />
            <S.Error>{formState.errors.email?.message}</S.Error>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.InputTitle>이름</S.InputTitle>
            <InputUnderline
              type="text"
              register={register("name")}
              placeholder="이름을 입력해주세요."
            />
            <S.Error>{formState.errors.name?.message}</S.Error>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.InputTitle>비밀번호</S.InputTitle>
            <InputUnderline
              type="password"
              register={register("password")}
              placeholder="비밀번호를 입력해주세요."
            />
            <S.Error>{formState.errors.password?.message}</S.Error>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.InputTitle>비밀번호 확인</S.InputTitle>
            <InputUnderline
              type="password"
              register={register("passwordConfirm")}
              placeholder="비밀번호를 한 번 더 입력해주세요."
            />
            <S.Error>{formState.errors.passwordConfirm?.message}</S.Error>
          </S.InputWrapper>
          <S.ButtonWrapper>
            <ButtonBlack title="회원가입" />
          </S.ButtonWrapper>
        </S.Form>
        <S.LoginAlreadyWrapper>
          <S.Text>이미 아이디가 있으신가요?</S.Text>
          <S.LoginText onClick={onClickMoveToPage(`/login`)}>
            로그인
          </S.LoginText>
        </S.LoginAlreadyWrapper>
      </S.SignupWrapper>
    </S.Wrapper>
  );
}
