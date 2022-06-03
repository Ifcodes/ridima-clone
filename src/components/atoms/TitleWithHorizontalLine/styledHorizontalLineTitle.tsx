import styled from "styled-components";
import { TitleProps } from ".";

export const TitleWrapper = styled.div<TitleProps>`
  display: flex;
  align-items: center;

  .text-cont {
    width: max-content;

    h1 {
      color: ${(props) => props.textColor || props.theme.colors.blue};
      font-size: ${(props) => props.textSize || "1.125rem"};
      width: max-content;
    }
  }

  hr {
    width: 100%;
    height: 1px;
    border: 1px solid ${(props) => props.lineColor || "#d7d4f7"};
    margin-left: 1.5rem;
  }
`;
