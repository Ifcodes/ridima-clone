import styled from "styled-components";

export const HotGiftCardsWrapper = styled.div`
  width: 100%;

  .stage-title-wrapper {
    margin: 0 0 2rem;
  }

  @media screen and (max-width: 640px) {
    height: 80vh;
  }
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

  @media screen and (max-width: 640px) {
    width: 100%;
    padding-bottom: 6rem;

    .list-wrapper {
      padding-bottom: 4rem;
      .list-item {
        width: 100%;
      }
    }
  }
`;
