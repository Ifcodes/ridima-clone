import styled from "styled-components";
import { ButtonProps } from ".";

export const ButtonWrapper = styled.button<ButtonProps>`
  width: ${props => props.width || "100%"};
  font-size: 1rem;
  color: ${props => props.textColor 
    ? props.textColor
    : props.disabled
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
  align-items: ${props => props.menuBtn ? 'flex-start' : 'center'};
  cursor: pointer;

  .text-cont{
    position: absolute;
    display: flex;
    justify-content: ${props => props.menuBtn ? 'flex-start' : 'center'};
    align-items: center;
    width: 80%;
    height: 100%;
    margin: ${props => props.menuBtn ? '0 1rem' : '0 auto'};
    top: 0;
  }

  span{
    margin: 0.5rem;
  }

  .button-Bg{
    max-width: 100%;
    visibility: ${props => props.hideBg 
      ? 'hidden'
      : 'visible'
    };
  }
`