import styled, { css } from "styled-components";

export const ScrollableModalContent = styled.div<{
  mt?: string;
  height?: string;
}>`
  width: 90%;
  height: ${({ height }) => height || "90%"};
  padding: 0 1rem;
  margin: 1rem auto;
  overflow-y: auto;
  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt};
    `}
  ::-webkit-scrollbar {
    width: 12px;
    border-radius: 24px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f2f2f2;
    border-radius: 24px;
    margin-bottom: 4rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #bdbdbd;
    border-radius: 24px;
  }
`;
