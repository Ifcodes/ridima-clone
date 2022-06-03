import styled from "styled-components";

export const TrapCardWrapper = styled.div<{ cardType?: string }>`
  width: 26rem;
  height: 7.9rem;
  cursor: pointer;
  position: relative;

  .card-content-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 1.75rem;

    .card-content {
      width: 100%;
      display: flex;
      justify-content: space-between;

      h1 {
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
  }
`;
