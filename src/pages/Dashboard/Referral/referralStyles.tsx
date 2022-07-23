import styled from "styled-components";

export const ReferralPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;

  .heading {
    width: 100%;
    height: 9rem;
    background-color: ${(props) => props.theme.colors.blue};
    background-image: url("/vectors/BlueHeadingRecWithPattern.svg");
    background-size: cover;
    background-repeat: none;
    padding: 2rem 3rem;
    display: flex;
    justify-content: space-between;
    position: relative;

    .title-cont {
      display: flex;
      align-items: center;
      width: 55%;

      .text-cont {
        margin-left: 1.8rem;

        h1 {
          font-size: 2.25rem;
          color: white;
          margin: 1rem 0 0;
        }

        p {
          color: rgba(255, 255, 254, 0.3);
          margin-top: 0;
        }
      }
    }

    .cta-cont {
      display: flex;
      align-items: center;

      .referral-code {
        width: 13.3rem;
        padding: 1.5rem;
        background-color: #f6f6f6;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .share-btn {
        width: max-content;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.5rem 1.6rem;
        border-radius: 50px;
        background-color: ${(props) => props.theme.colors.yellow};
        color: ${(props) => props.theme.colors.deepPurple};
        margin-left: 1rem;
      }
    }
  }

  .details {
    height: 70%;
    overflow-y: auto;

    .page-content {
      padding: 3.125rem 3rem 0;

      .line-title {
        margin: 2rem 0;
      }

      .stats-wrapper {
        width: 50%;

        .stat {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.125rem;
          border-bottom: 0.5px solid rgba(224, 224, 224, 0.7);
          padding: 1rem;
          margin-top: 1rem;

          .stat-title {
            color: ${(props) => props.theme.colors.grey1};
          }

          .stat-value {
            color: ${(props) => props.theme.colors.grey2};
            font-weight: 500;
          }
        }
      }
    }
  }

  .mobile-page-cont {
    display: none;
  }

  .header {
    display: none;
  }

  .mobile-referral-details {
    display: none;
  }

  @media screen and (max-width: 640px) {
    height: 90%;
    overflow-y: hidden;

    .heading,
    .details {
      display: none;
    }

    .mobile-referral-details {
      display: block;
      height: 80%;
      overflow-y: auto;

      .page-content {
        padding: 1rem 1.5rem 6rem;

        .line-title {
          margin: 3rem 0 1rem;
        }

        .stats-wrapper {
          width: 100%;

          .stat {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1.125rem;
            border-bottom: 0.5px solid rgba(224, 224, 224, 0.7);
            padding: 1rem;
            margin-top: 1rem;

            .stat-title {
              color: ${(props) => props.theme.colors.grey1};
            }

            .stat-value {
              color: ${(props) => props.theme.colors.grey2};
              font-weight: 500;
            }
          }
        }
      }
    }

    .header {
      display: block;
      width: 100%;
      padding: 1rem 1.5rem 0;
    }

    .mobile-page-cont {
      height: 88%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 7rem;
      overflow-y: auto;

      .btn-cont {
        width: 100%;
        padding: 0 1rem;
      }
      .content {
        padding: 1rem 2rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .img-cont {
          width: 80%;

          img {
            max-width: 100%;
          }
        }

        .cta-cont {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 2rem;

          .referral-code {
            width: 13.3rem;
            padding: 1.5rem;
            background-color: #f6f6f6;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .share-btn {
            width: max-content;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1.5rem 1.6rem;
            border-radius: 50px;
            background-color: ${(props) => props.theme.colors.yellow};
            color: ${(props) => props.theme.colors.deepPurple};
            margin-left: 1rem;
          }
        }
      }
    }
  }
`;
