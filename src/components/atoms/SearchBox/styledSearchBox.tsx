import styled from "styled-components";

export const SearchBoxWrapper = styled.div<{
  width?: string;
  border?: string;
}>`
  width: ${props => props.width || '100%'};
  display: flex;
  border: ${props => props.border || 'none'};
  padding: 1rem;

  input{
    display: flex;
    flex-grow: 1;
    margin: 1rem;
    font-size: 1rem;
    padding: 1rem;
    border: none;
    outline: none;
  }
`