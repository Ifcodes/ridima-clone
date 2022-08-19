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

      .v-dollar-title {
        width: 11rem;
        color: #3f1e4b;
      }

      .v-dollar-title-mobile {
        display: none;
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

      .master-card-logo {
        width: 5rem;
        max-width: 4.3rem;

        svg {
          width: 100%;
        }
      }
    }

    .btn-coming-soon {
      display: none;
    }

    .mobile-btn-create-card {
      display: none;
    }

    .create-fee-text {
      color: ${(props) => props.theme.colors.grey2};
    }
  }

  img {
    width: 100%;
  }

  .cardBg {
    width: 100%;

    svg {
      width: 100%;
    }
  }

  .mobile-card-bg {
    display: none;
  }

  @media screen and (max-width: 640px) {
    .card-content {
      left: 0;
      width: 100%;

      .btn-complete {
        display: none;
      }

      p {
        margin-top: 0.5rem;
        font-size: 2.5vw;
      }

      .btn-coming-soon {
        display: flex;
        width: 100%;
        max-width: 100%;

        /* button {
          margin-top: 0.5rem;
        } */
      }

      .mobile-btn-create-card {
        display: block;
        width: 8rem;
      }

      .title-cont {
        flex-direction: column-reverse;
        justify-content: flex-start;
        align-items: flex-start;
        /* margin-top: 0; */

        p {
          margin-bottom: 0;
        }

        .v-dollar-title-mobile {
          display: flex;
          width: 100%;
          max-width: 15rem;
          flex-direction: column;
          color: #3f1e4b;

          h3 {
            margin-bottom: 0;
          }

          .mastercard-title {
            margin: 0 0 0.5rem;
          }
        }

        .v-dollar-title {
          display: none;
        }

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

  @media screen and (max-width: 320px) {
    .card-content {
      .title-cont {
        .v-dollar-title-mobile {
          font-size: 3vw;
        }
      }

      .create-fee-text {
        font-size: 3vw;
      }

      .btn-coming-soon {
        button {
          margin-top: 0.5rem;
        }
      }
    }
  }
`;

export const ActiveCardWrapper = styled.div`
  width: 100%;
  height: 100%;
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
      bottom: 0.3rem;
      max-width: 100%;
    }
  }

  .mobile-card-bg {
    display: none;
  }

  @media screen and (max-width: 640px) {
    padding: 0;

    .cardBg {
      display: none;
    }

    .content {
      width: 100%;
      height: 100%;

      .title-cont {
        width: 100%;
        margin: 0;
        padding: 1rem;
      }

      .card-illustrations {
        bottom: 0.2rem;
        right: 1.5rem;
      }
    }
    .mobile-card-bg {
      display: block;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
