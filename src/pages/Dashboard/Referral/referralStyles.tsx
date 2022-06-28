import styled from "styled-components";

export const ReferralPageWrapper = styled.div`
  width: 100%;

  .heading {
    width: 100%;
    height: 14.7rem;
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
        }

        p {
          color: rgba(255, 255, 254, 0.3);
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

  .page-content {
    padding: 3.125rem 3rem 6rem;

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
`;
