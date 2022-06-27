import styled from "styled-components";

export const LeaderBoardWrapper = styled.div`
  width: 100%;
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
      }
    }

    .leaders {
      width: 100%;
      display: flex;
      position: absolute;
      bottom: 2rem;
      left: 28rem;
      gap: 3rem;
    }
  }

  .main-content {
    padding: 0 3rem;

    .line-title {
      margin: 2.5rem 0 0;
    }

    .other-leader {
      width: 100%;
      margin-top: 1.5rem;
      img {
        max-width: 100%;
      }
    }
  }
`;
