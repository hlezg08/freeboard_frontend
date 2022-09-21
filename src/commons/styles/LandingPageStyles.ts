import styled from "@emotion/styled";
import { breakPoints } from "./media";

export const Body = styled.div`
  height: 100vh;
  background-color: #fbf8f2;
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  max-width: 75rem;
  height: 100vh;
  display: flex;
  column-gap: 1.25rem;
  @media ${breakPoints.mobile} {
    width: 100%;
    flex-direction: column;
    margin: 2.5rem 0;
    row-gap: 1.25rem;
  }
`;
export const TextWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;
export const SubTitle = styled.span`
  font-size: 1rem;
`;
export const ButtonWrapper = styled.div`
  margin: 1.25rem 0;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Image = styled.img`
  height: 400px;
`;
