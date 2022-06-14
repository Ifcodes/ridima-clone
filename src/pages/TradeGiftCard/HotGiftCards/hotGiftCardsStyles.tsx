import styled from "styled-components";

export const HotGiftCardsWrapper = styled.div`
  width: 100%;
`;

export const HotGiftCardDefaultWrapper = styled.div`
  .title-wrapper {
    margin-bottom: 1.5rem;

    h1 {
      color: ${(props) => props.theme.colors.deepPurple};
      font-size: 2.25rem;
      font-weight: 700;
      margin-bottom: 0;
    }
    p {
      font-size: 0.85rem;
      margin: 0.7rem 0;
    }
  }

  .list-wrapper {
    margin-bottom: 6rem;
    width: 100%;
    .list-item {
      width: 50%;
    }
  }
`;
