import styled from "@emotion/styled";

export const MyMenuWrapper = styled.div`
  background: url(${(props) => props.url});
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
