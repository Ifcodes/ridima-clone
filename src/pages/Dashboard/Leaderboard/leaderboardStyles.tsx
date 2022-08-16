import styled from "styled-components";

export const LeaderBoardWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .heading {
    width: 100%;
    height: 19rem;
    background-color: ${(props) => props.theme.colors.blue};
    background-image: url("/vectors/BlueHeadingRecWithPattern.svg");
    background-size: cover;
    background-repeat: none;
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    position: relative;

    .title-cont {
      width: 100%;
      display: flex;
      justify-content: space-between;

      h1 {
        color: white;
        margin-top: 0;
      }

      p {
        color: rgba(255, 255, 254, 0.3);
        margin: 4px;
        font-size: 400;
        font-size: 1rem;
      }
    }

    .leaders {
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 4rem;
      left: 0;
      gap: 3rem;

      leader {
        width: 4.5rem;

        img {
          width: 100%;
        }

        :nth-child(1) {
          width: 7.5rem;
          order: 2;
        }
      }
    }

    .desc {
      position: absolute;
      bottom: 1.5rem;
      left: 0;
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #f5cf48;
      font-weight: 500;
    }
  }

  .main-content {
    height: calc(100vh - 16rem);
    padding: 0 3rem 8rem;
    overflow-y: auto;

    .line-title {
      margin: 2.5rem 0 0;
    }

    .other-leaders-wrapper {
      width: 100%;
      margin-top: 1.5rem;
    }
  }

  @media screen and (max-width: 640px) {
    .heading {
      padding: 1rem;
      height: 22rem;

      .title-cont {
        height: 35%;
        flex-direction: column;

        p {
          font-size: 0.7rem;
        }

        .period-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          margin: 0.5rem 0;
        }
      }

      .leaders {
        width: 100%;
        gap: 2rem;
        bottom: 4rem;
      }

      .desc {
        width: 100%;
      }
    }
    .main-content {
      overflow-y: auto;
      padding: 0 1.5rem 16rem;

      .line-title {
        margin: 1rem 0 0;
      }
    }
  }
`;
