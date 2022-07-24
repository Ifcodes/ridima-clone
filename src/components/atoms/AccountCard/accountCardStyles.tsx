import styled from "styled-components";

export const AccountCardWrapper = styled.div<{
  cardType?: string;
  isActive?: boolean;
}>`
  width: 23rem;
  height: 11.5rem;
  border-radius: 1.875rem;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: ${(props) => (props.isActive ? "1px solid #7165E3" : "")};

  :hover {
    border: 1px solid #7165e3;
  }

  img {
    width: 100%;
    height: 95%;
  }

  .card-content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    color: ${(props) =>
      props.cardType === "Primary" ? "white" : props.theme.colors.deepPurple};

    .card-type {
      background-color: ${({ cardType, theme }) =>
        cardType === "Primary" ? theme.colors.yellow : theme.colors.blue};
      color: ${({ cardType, theme }) =>
        cardType === "Primary" ? theme.colors.deepPurple : "white"};
      width: ${({ cardType }) =>
        cardType === "Primary" ? "max-content" : "2rem"};
      height: ${({ cardType }) => (cardType === "Primary" ? "" : "2rem")};
      padding: ${({ cardType }) =>
        cardType === "Primary" ? " 0.5rem 1rem" : "0"};
      border-radius: ${({ cardType }) =>
        cardType === "Primary" ? "1.3rem" : "100%"};
      align-self: flex-end;
    }

    .card-details {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;

      .acc-number {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.5rem;
      }

      .bank-name {
        font-size: 0.75rem;
      }
    }
  }
`;
