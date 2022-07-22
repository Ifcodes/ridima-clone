import styled from "styled-components";

export const AccountCardWrapper = styled.div<{
  cardType?: string;
  isActive?: boolean;
}>`
  width: 23rem;
  height: 11.25rem;
  border-radius: 1.875rem;
  position: relative;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 24px 2px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    height: 100%;
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
      background-color: ${(props) =>
        props.cardType === "Primary"
          ? props.theme.colors.yellow
          : props.theme.colors.blue};
      color: ${(props) =>
        props.cardType === "Primary" ? props.theme.colors.deepPurple : "white"};
      width: max-content;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
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
