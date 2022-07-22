import { DetailedHTMLProps } from "react";
import styled from "styled-components";

export type InputStyleProps = {
  width?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  padding?: string;
  bgColor?: string;
  isFocused?: boolean | string | number;
  shownError?: boolean;
  label?: string;
};

export const InputWrapper = styled.div<InputStyleProps>`
  width: ${(props) => props.width || "100%"};
  background-color: ${(props) => props.bgColor || props.theme.colors.grey6};
  padding: ${(props) =>
    props.padding
      ? props.padding
      : !props.label
      ? "1.2rem 1.5rem"
      : "0.8rem 1.5rem"};
  position: relative;
  border-radius: 3.125rem;
  border: ${(props) => props.shownError && "1px solid #E81313"};
  margin-top: ${(props) => props.mt || "1rem"};
  margin-bottom: ${(props) => props.mb || "0"};
  margin-left: ${(props) => props.ml || "0"};
  margin-right: ${(props) => props.mr || "0"};
  display: flex;
  align-items: center;

  label {
    font-size: 0.85rem;
    color: ${(props) =>
      props.isFocused ? props.theme.colors.grey4 : props.theme.colors.grey2};
    font-weight: 500;
    margin-bottom: 0.4rem;
  }

  .input-cont {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 1rem;

    .symbol-cont {
      display: flex;
      align-items: center;

      .symbol {
        font-weight: 700;
        color: ${(props) =>
          props.isFocused
            ? props.theme.colors.grey1
            : props.theme.colors.grey4};
        margin-right: 1rem;
      }
    }

    input {
      width: 100%;
      font-size: 1rem;
      font-weight: 500;
      background-color: transparent;
      color: ${(props) => props.theme.colors.grey1};
      border: none;
      outline: none;

      &::placeholder {
        font-size: 1rem;
        font-weight: 600;
        color: ${(props) => props.theme.colors.grey4};
      }
    }
  }

  @media screen and (max-width: 640px) {
    max-width: 100%;
    padding: 0.85rem 1rem 0.85rem 1.5rem;
    margin-top: 1.5rem;
  }
`;
