import styled from "styled-components";

export const TradeGiftCardWrapper = styled.div`
  width: 100%;
  overflow: auto;

  .default {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(37rem, 1fr));
    margin-top: 3rem;
    grid-gap: 1rem;
  }
`;

export const SellGiftCardWrapper = styled.div`
  width: 100%;

  .heading {
    width: 100%;
    height: 13rem;
    background-color: ${(props) => props.theme.colors.blue};
    background-image: url("/vectors/BlueHeadingRecWithPattern.svg");
    background-size: cover;
    background-repeat: none;
    padding: 2rem 3rem 1rem;
  }

  .search-cont {
    margin-top: 2.5rem;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 2rem 3rem;

    .content {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
      margin-top: 2rem;
      grid-gap: 1rem;
    }
  }
`;
