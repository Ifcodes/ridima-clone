import styled from "styled-components";

export const SelectButtonWrapper = styled.div`
  width: 25rem;
  height: 4.3rem;
  background-color: #f6f6f6;
  border-radius: 3.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  cursor: pointer;

  .title {
    color: ${(props) => props.theme.colors.grey3};
  }
`;
