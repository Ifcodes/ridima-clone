import styled from "styled-components";

export const VirtualDollarCardWrapper = styled.div`
  width: 100%;
  position: relative;

  .card-content {
    position: absolute;
    top: 0;
    left: 1rem;
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 1rem;
    background-color: transparent;

    .title-cont {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.5rem;

      .title {
        width: 11rem;
        color: #3f1e4b;
      }

      .img-cont {
        width: 6rem;
        height: 6rem;
        border-radius: 100%;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .description {
      color: ${(props) => props.theme.colors.grey2};
      margin-top: 1.5rem;
    }
  }

  img {
    width: 100%;
  }

  .mobile-card-bg {
    display: none;
  }

  @media screen and (max-width: 640px) {
    .card-content {
      .btn-complete {
        display: none;
      }

      .title-cont {
        flex-direction: column-reverse;
        justify-content: flex-start;
        align-items: flex-start;

        .img-cont {
          width: 4rem;
          height: 4rem;
        }
      }
    }

    .cardBg {
      display: none;
    }

    .mobile-card-bg {
      display: block;
      width: 100%;
      height: 100%;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export const ActiveCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  height: max-content;
  padding: 0 1rem;
  background-color: transparent;
  cursor: pointer;

  .content {
    width: 90%;
    height: 95%;
    position: absolute;
    left: 0;
    top: 0;

    .title-cont {
      width: 9rem;
      margin-left: 3.5rem;
      margin-top: 3rem;

      .title {
        color: ${(props) => props.theme.colors.deepPurple};
        font-size: 1.5rem;
      }

      .total-cards {
        width: max-content;
        height: max-content;
        padding: 0.6rem;
        background-color: ${(props) => props.theme.colors.lightYellow};
        border-radius: 1.25rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .card-illustrations {
      width: 60%;
      position: absolute;
      right: 0;
      bottom: 0;
      max-width: 100%;
    }
  }

  /* .cardBg{
    width: 100%;
    height: 100%;
  } */
`;
