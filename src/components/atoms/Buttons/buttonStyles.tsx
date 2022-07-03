import styled from "styled-components";
import { ButtonProps } from ".";

export const ButtonWrapper = styled.button<ButtonProps>`
  width: ${(props) => props.width || "100%"};
  font-size: 1rem;
  color: ${(props) =>
    props.textColor
      ? props.textColor
      : props.disabled
      ? props.theme.colors.lightGrey
      : props.theme.colors.deepPurple};
  margin-top: ${(props) => props.mt || "1rem"};
  margin-bottom: ${(props) => props.mb || "0"};
  background-color: transparent;
  border: none;
  outline: none;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.buttonPosition === "left"
      ? "flex-start"
      : props.buttonPosition === "right"
      ? "flex-end"
      : "center"};
  cursor: pointer;

  .text-cont {
    position: absolute;
    display: flex;
    justify-content: ${(props) => (props.menuBtn ? "flex-start" : "center")};
    align-items: center;
    width: 80%;
    height: 100%;
    margin: ${(props) => (props.menuBtn ? "0 1rem" : "0 auto")};
    top: 0;
  }

  span {
    margin: 0.5rem;
  }

  .button-Bg {
    max-width: 100%;
    visibility: ${(props) => (props.hideBg ? "hidden" : "visible")};
  }
`;

export const AddButtonWrapper = styled.button<ButtonProps>`
  width: ${(props) => props.width || "3.4rem"};
  height: ${(props) => props.height || "3.4rem"};
  border-radius: 100%;
  background-color: ${(props) => props.bgColor || "#EBE9FB"};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
`;
