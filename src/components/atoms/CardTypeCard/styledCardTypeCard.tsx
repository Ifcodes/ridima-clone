import styled from "styled-components";

export const CardTypeCardWrapper = styled.div<{
  cardBgColor?: string;
  isActive?: boolean;
}>`
  width: 7.5rem;
  height: 6.5rem;
  border-radius: 0.8rem;
  border: ${(props) => (props.isActive ? "1px solid #7165e3" : "none")};
  background-color: ${(props) =>
    props.cardBgColor
      ? props.cardBgColor
      : props.isActive
      ? "#f8f7fe"
      : "#F6F6F6"};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6rem 0.875rem;
  cursor: pointer;

  :hover {
    border: 1px solid #7165e3;
    background-color: #f8f7fe;
  }

  .card-type-title {
    font-size: 0.9rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.grey1};
    margin: 0.5rem 0;
  }

  .card-type-desc {
    font-size: 0.9rem;
    color: ${(props) => props.theme.colors.grey3};
  }
`;
