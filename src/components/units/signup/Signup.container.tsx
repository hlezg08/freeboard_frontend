import SignupUI from "./Signup.presenter";
import { useState, ChangeEvent } from "react";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
const CREATE_USER = gql`
  mutation ($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;
export default function Signup() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
    passwordAgain: "",
  });
  const { email, name, password, passwordAgain } = inputs;

  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPasswordAgain, setErrorPasswordAgain] = useState("");

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });

    if (value !== "") {
      if (name === "email") setErrorEmail("");
      if (name === "name") setErrorName("");
      if (name === "password") setErrorPassword("");
      if (name === "passwordAgain") setErrorPasswordAgain("");
    }
  };
  const onClickSubmit = async () => {
    if (!email.includes("@")) {
      setErrorEmail("@를 포함한 이메일 주소를 입력하세요.");
    }
    if (!name) {
      setErrorName("이름은 필수 입력입니다.");
    }
    if (!password) {
      setErrorPassword("비밀번호는 필수 입력입니다.");
    }
    if (!passwordAgain) {
      setErrorPasswordAgain("비밀번호를 다시 입력해주세요.");
    }
    if (password !== passwordAgain) {
      setErrorPasswordAgain("비밀번호가 일치하지 않습니다.");
    }

    if (
      email &&
      name &&
      password &&
      passwordAgain &&
      password === passwordAgain
    ) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              email,
              name,
              password,
            },
          },
        });
        Modal.success({
          content: "회원가입을 축하합니다",
        });
        console.log(result.data.createUser._id);
        router.push(`/boards`);
      } catch (error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  return (
    <SignupUI
      onChangeInputs={onChangeInputs}
      errorEmail={errorEmail}
      errorName={errorName}
      errorPassword={errorPassword}
      errorPasswordAgain={errorPasswordAgain}
      onClickSubmit={onClickSubmit}
    ></SignupUI>
  );
}
