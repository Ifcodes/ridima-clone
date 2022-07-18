import styled from "styled-components";

export const TrapCardWrapper = styled.div<{ cardType?: string }>`
  height: max-content;
  cursor: pointer;
  position: relative;

  .trap-wrapper {
    width: 100%;
    height: 100%;

    svg {
      width: 100%;
    }
  }

  .card-content {
    width: 100%;
    height: 100%;
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

        h1 {
          width: 10rem;
          margin-top: 0.5rem;
        }
      }

      .icon-wrapper {
        width: 5rem;
        height: 5rem;
        border-radius: 6rem;

        svg {
          width: 100%;
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
`;
