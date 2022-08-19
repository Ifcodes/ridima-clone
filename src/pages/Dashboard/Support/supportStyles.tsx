import styled from "styled-components";

export const SupportPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .support-header-title-mobile {
    display: none;
  }

  @media screen and (max-width: 640px) {
    .support-header-title {
      display: none;
    }

    .support-header-title-mobile {
      display: block;
      padding: 1rem;
    }
  }
`;

export const SupportContentWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  .icon-wrapper {
    width: 35%;

    svg {
      width: 100%;
    }
  }

  .support-text-content {
    margin-left: 1rem;

    h1 {
      margin-top: 0;
      font-size: 2rem;
      font-weight: 700;
      width: 60%;
    }

    .support-contact-channels {
      width: 70%;
      display: flex;
      justify-content: space-between;

      .channel {
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          margin-top: 1rem;
          color: ${({ theme }) => theme.colors.grey1};
        }

        .description {
          line-height: 24px;
          color: ${({ theme }) => theme.colors.grey3};
        }
      }
    }

    .card {
      width: 20rem;
      height: 6rem;
      margin: 2rem 0;
      padding: 1rem;
      border-radius: 1.25rem;
      display: grid;
      grid-template-columns: 20% 1fr;
      align-items: center;
      background-color: ${(props) => props.theme.colors.blue};

      .card-text-content {
        margin-left: 1rem;

        h3 {
          font-size: 1.125rem;
          font-weight: 500;
          color: white;
          margin: 0;
        }

        span {
          margin-top: 0.5rem;
          line-height: 0;
          font-size: 0.75rem;
          color: white;
        }
      }
    }
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 90%;
    padding-bottom: 8rem;
    overflow-y: auto;
    flex-direction: column;
    align-items: center;

    .icon-wrapper {
      width: 80%;
    }

    .support-text-content {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        width: 80%;
        text-align: center;
        color: ${(props) => props.theme.colors.blue};
        margin-top: 1rem;
      }
    }
  }
`;
