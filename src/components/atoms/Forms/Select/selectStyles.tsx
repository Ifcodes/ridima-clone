import styled from "styled-components";
import { InputStyleProps } from "../Input/inputStyles";

export const SelectWrapper = styled.div<InputStyleProps>`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 3.125rem;
  background-color: ${(props) => props.bgColor || " #F6F6F6"};
  margin-top: ${(props) => props.mt || "1rem"};
  display: flex;
  align-items: center;

  select {
    width: 100%;
    border: none;
    outline: none;
    color: grey;
    background-color: transparent;
    background-image: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    :focus {
      outline: none;
    }

    option {
      width: 100%;
      border: none;
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.3);

      :hover {
        background-color: grey;
      }

      :focus {
        border: none;
      }
    }
  }
`;
