import styled from "styled-components";

export const LeaderBoardWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .heading {
    width: 100%;
    height: 16rem;
    background-color: ${(props) => props.theme.colors.blue};
    background-image: url("/vectors/BlueHeadingRecWithPattern.svg");
    background-size: cover;
    background-repeat: none;
    padding: 2rem 3rem;
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
      bottom: 2rem;
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
  }

  .main-content {
    height: calc(100vh - 16rem);
    padding: 0 3rem 6rem;
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

      .title-cont {
        p {
          font-size: 0.7rem;
        }
      }

      .leaders {
        width: 100%;
        gap: 2rem;
        bottom: 1rem;
      }
    }
    .main-content {
      overflow-y: auto;
      padding: 0 1.5rem 14rem;

      .line-title {
        margin: 1rem 0 0;
      }
    }
  }
`;
