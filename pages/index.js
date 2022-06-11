import Head from "next/head";
import { useRouter } from "next/router";
import * as S from "../src/commons/styles/LandingPageStyles";
import ButtonPink from "../src/components/commons/buttons/pink";
export default function Home() {
  const router = useRouter();
  // useEffect(() => {
  //   return () => {
  //     console.log("게시글로 이동");
  //   };
  // }, []);
  const onClickBoards = () => {
    router.push("/boards");
  };

  return (
    <>
      <Head>
        <title>집사마켓</title>
        <link rel="icon" href="/icons/ic-cat-footprint.png" />
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
            <ButtonPink onClick={onClickBoards} title="바로가기" />
          </S.TextWrapper>
          <S.ImageWrapper>
            <S.Image src="./images/landing-page-kitten.png" />
          </S.ImageWrapper>
        </S.Wrapper>
      </S.Body>
    </>
  );
}
