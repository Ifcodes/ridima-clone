import styled from "styled-components";

export const TradeCardWrapper = styled.div`
  width: 100%;
  height: max-content;
  max-width: 35rem;
  cursor: pointer;

  position: relative;

  .card-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    padding-right: 1.2rem;
    top: 0;
    left: 0;

    h3 {
      width: 10rem;
      color: ${(props) => props.theme.colors.primary};
      font-weight: 700;
      font-size: 1.8rem;
    }
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: 640px) {
    .card-content {
      h3 {
        width: 8rem;
        font-size: 1.5rem;
      }
    }
  }
`;
