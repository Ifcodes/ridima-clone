import styled from "styled-components";
import { InputStyleProps } from "../Input/inputStyles";

interface MoneyInputStyleProps extends InputStyleProps {
  textColor?: string;
  placeholderColor?: string;
  valueIsPlaceholder?: boolean;
}

export const MoneyInputWrapper = styled.div<MoneyInputStyleProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  span {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${(props) => props.textColor || props.theme.colors.deepPurple};
  }
  input {
    width: 100%;
    font-weight: 700;
    font-size: 2.5rem;
    background-color: ${(props) => props.bgColor || "transparent"};
    outline: none;
    color: ${(props) => props.textColor || props.theme.colors.deepPurple};
    border: none;
    text-align: center;

    ::placeholder {
      color: ${(props) => props.placeholderColor || "#3f1e4b33"};
    }
  }

  .value-cont {
    width: 100%;

    font-weight: 700;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .value {
      color: ${(props) =>
        props.valueIsPlaceholder ? "#3f1e4b33" : props.theme.colors.deepPurple};
      margin-left: 1rem;
    }
  }
`;
