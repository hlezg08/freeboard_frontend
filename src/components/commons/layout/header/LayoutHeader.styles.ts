import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
export const LayoutHeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background-color: white;
  @media ${breakPoints.mobile} {
    padding: 0;
  }
`;
export const LogoImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const LayoutLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LoggedInText = styled.span`
  color: black;
  overflow: hidden;
  padding-right: 10px;
  font-size: 1.125rem;
`;
export const HeaderButton = styled.button`
  width: auto;
  height: 50px;
  border: none;
  color: black;
  font-size: 1.125rem;
  background-color: white;
  :hover {
    cursor: pointer;
    color: black;
  }
`;
