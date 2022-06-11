import styled from "@emotion/styled";
export const LayoutHeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background-color: white;
`;
export const LayoutHeaderLogo = styled.img`
  width: 40px;
  height: 40px;
`;
export const LoggedInText = styled.span`
  color: black;
  padding-right: 10px;
  font-size: 18px;
`;
export const LayoutHeaderButton = styled.button`
  width: auto;
  height: 50px;
  border: none;
  color: black;
  font-size: 18px;
  background-color: white;
  :hover {
    cursor: pointer;
    color: black;
  }
`;
