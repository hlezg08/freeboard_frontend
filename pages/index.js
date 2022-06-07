import Head from "next/head";
//import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as S from "../src/commons/styles/welcomeStyles";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    return () => {
      console.log("게시글로 이동");
    };
  }, []);
  const onClickBoards = () => {
    router.push("/boards");
  };

  return (
    <div>
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Body>
        <S.Wrapper>
          <S.TextWrapper>
            <S.Title>
              고양이와 집사의
              <br />
              행복한 라이프를 위해
            </S.Title>
            <S.SubTitle>
              고양이 용품부터 집사 꿀팁까지, <br /> 이웃들과 나눠보세요.
            </S.SubTitle>
            <S.ClickBoardsButton onClick={onClickBoards}>
              바로가기
            </S.ClickBoardsButton>
          </S.TextWrapper>
          <S.ImageWrapper>
            <S.Image src="./images/landing-page-kitten.png" />
          </S.ImageWrapper>
        </S.Wrapper>
      </S.Body>
    </div>
  );
}
