import styled from "styled-components";
import { ButtonProps } from ".";

export const ButtonWrapper = styled.button<ButtonProps>`
  width: ${props => props.width || "100%"};
  font-size: 1rem;
  color: ${props => props.disabled
    ? props.theme.colors.lightGrey
    : props.theme.colors.black
  };
  margin-top: ${props => props.mt || "1rem"};
  margin-bottom: ${props => props.mb || "0"};
  background-color: transparent;
  border: none;
  outline: none;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  .text-cont{
    position: absolute;
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    top: 1.3rem;
  }

  span{
    margin: 0.5rem;
  }
`