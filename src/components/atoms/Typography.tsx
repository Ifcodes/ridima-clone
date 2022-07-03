import styled, { css } from "styled-components";

type TextProps = {
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  fontSize?: string;
  color?: string;
};

export const H1 = styled.h1<TextProps>`
  font-size: ${(props) => props.fontSize || "1.75rem"};
  color: ${(props) => props.color || props.theme.colors.primary};
  font-weight: 700;
  margin-top: ${(props) => props.mt || "1rem"};
  margin-bottom: ${(props) => props.mb || "0"};
  margin-left: ${(props) => props.ml || "0"};
  margin-right: ${(props) => props.mr || "0"};

  @media screen and (max-width: 1240px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 640px) {
    font-size: 1.75rem;
  }
`;
export const Paragraph = styled.p<TextProps>`
  font-size: 1rem;
  color: ${(props) => props.color || props.theme.colors.grey2};
  margin-top: ${(props) => props.mt || "1rem"};
  margin-bottom: ${(props) => props.mb || "1rem"};
  margin-left: ${(props) => props.ml || "0"};
  margin-right: ${(props) => props.mr || "0"};
`;
