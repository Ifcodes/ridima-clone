import styled from "styled-components";

export const SelectButtonWrapper = styled.div<{
  isActive?: boolean;
  mt?: string;
}>`
  width: 27rem;
  height: 4.3rem;
  background-color: #f6f6f6;
  border-radius: 3.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  cursor: pointer;
  margin-top: ${(props) => props.mt || ""};

  .title {
    color: ${(props) =>
      props.isActive ? props.theme.colors.grey1 : props.theme.colors.grey3};
  }
`;
