import styled, { css } from "styled-components";

type TextProps = {
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  color?: string;
} 

export const H1 = styled.h1<TextProps>`
  font-size: 1.75rem;
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
  margin-top: ${props => props.mt || "1rem"};
  margin-bottom: ${props => props.mb || "0"};
  margin-left: ${props => props.ml || "0"};
  margin-right: ${props => props.mr || "0"};

  @media screen and (max-width: 1240px){
    font-size: 1.5rem
  }
`
export const Paragraph = styled.p<TextProps>`
  font-size: 1rem;
  color: ${props => props.color || props.theme.colors.grey2};
  margin-top: ${props => props.mt || "1rem"};
  margin-bottom: ${props => props.mb || "1rem"};
  margin-left: ${props => props.ml || "0"};
  margin-right: ${props => props.mr || "0"};
`