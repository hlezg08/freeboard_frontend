import { useRouter } from "next/router";
import LoginUI from "./Login.presenter";
import { useState, ChangeEvent } from "react";

export default function Login() {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    if (value !== "") {
      if (name === "email") setErrorEmail("");
      if (name === "password") setErrorPassword("");
    }
  };
  const onClickSubmit = () => {
    if (!email) {
      setErrorEmail("이메일은 필수 입력입니다.");
    }
    if (!password) {
      setErrorPassword("비밀번호는 필수 입력입니다.");
    }
  };
  const onClickSignup = () => {
    router.push(`/signup`);
  };
  return (
    <LoginUI
      onChangeInputs={onChangeInputs}
      errorEmail={errorEmail}
      errorPassword={errorPassword}
      onClickSignup={onClickSignup}
      onClickSubmit={onClickSubmit}
    ></LoginUI>
  );
}
