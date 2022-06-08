import styled from "styled-components";
import { StepperProps } from ".";

export const StepperWrapper = styled.div<StepperProps>`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 1rem 0 3rem;
`;

export const StepWrapper = styled.div<StepperProps>`
  width: 100%;
  display: grid;
  grid-template-columns: 1.5rem 2fr;
  align-items: center;

  .circle {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: ${(props) =>
      props.isDone ? props.theme.colors.blue : "white"};
    border: 1px solid
      ${(props) =>
        props.isActive ? props.theme.colors.blue : props.theme.colors.grey4};
  }

  hr {
    width: 100%;
    height: 1px;
    border: 1px solid
      ${(props) =>
        props.isDone ? props.theme.colors.blue : props.theme.colors.grey4};
  }

  :last-child hr {
    display: none;
  }
`;
