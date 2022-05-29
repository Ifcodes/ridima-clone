import styled from "styled-components";
import { ActionCardProps } from ".";

export const ActionCardWrapper = styled.div<ActionCardProps>`
  width: 5.75rem;
  height: 5.75rem;
  border-radius: 1.25rem;
  background-color: ${props => props.actionCardBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 1.5rem;
  cursor: pointer;

  p{
    font-size: 0.625rem;
    padding: 0;
    margin: 0;
    color: ${props => props.theme.colors.grey2};
  }
`