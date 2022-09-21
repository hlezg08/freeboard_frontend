import { css } from "@emotion/react";
import { breakPoints } from "./media";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    @media ${breakPoints.mobile} {
      font-size: 14px;
    }
  }
`;
