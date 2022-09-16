import * as S from "../src/commons/styles/LandingPageStyles";
import ButtonPink from "../src/components/commons/buttons/pink";
import { useMoveToPage } from "../src/components/commons/hooks/useMoveToPage";

export default function Home() {
  const { onClickMoveToPage } = useMoveToPage();
  const IMAGE_LINK = "./images/landing-page-kitten.png";

  return (
    <>
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
            <S.ButtonWrapper>
              <ButtonPink
                onClick={onClickMoveToPage("/boards")}
                title="바로가기"
              />
            </S.ButtonWrapper>
          </S.TextWrapper>
          <S.ImageWrapper>
            <S.Image src={IMAGE_LINK} />
          </S.ImageWrapper>
        </S.Wrapper>
      </S.Body>
    </>
  );
}
