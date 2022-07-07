import styled from "styled-components";

export const TrapCardWrapper = styled.div<{ cardType?: string }>`
  width: max-content;
  height: max-content;
  cursor: pointer;
  position: relative;

  .trap-wrapper {
    width: 100%;
    height: 100%;

    svg {
      width: auto;
    }
  }

  .card-content {
    width: 100%;
    margin: 1rem auto;
    padding: 0 2rem;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .text-cont {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .title-cont {
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
          width: 10rem;
        }
      }
    }

    h1 {
      width: 8rem;
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.deepPurple};
      margin: 0;
    }

    span {
      font-size: 0.8rem;
      color: #3f1e4b66;
      text-align: ${(props) =>
        props.cardType === "leftTrape" ? "right" : "left"};
    }

    .leftTrap-title {
      margin-top: 1.2rem;
    }
  }

  img {
    display: none;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 7rem;
    margin-top: 0;
    margin-bottom: 1rem;

    .card-content {
      width: 100%;
      /* max-width: 23rem; */
      height: 100%;
      margin-top: 0;

      .icon-wrapper {
        width: 5rem;
        height: 5rem;

        svg {
          max-width: 100%;
          max-height: 100%;
        }
      }

      .text-cont {
        width: 80%;
      }
    }

    .trap-wrapper {
      display: none;
    }

    img {
      display: flex;
      width: 100%;
      height: 100%;
    }
  }
`;
