import styled, { keyframes } from "styled-components";

export const HomeWrapper = styled.section`
  width: 100%;

  .salutation {
    span {
      color: ${(props) => props.theme.colors.grey4};
    }
    .user {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .secondary-tabs {
    display: none;
  }

  .statCard-wrapper {
    width: 100%;
    display: grid;
    margin-top: 2rem;
    grid-template-columns: 60% 1fr;
    grid-gap: 1rem;
  }

  .quick-action {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 1.5rem 0;

    span {
      width: 12rem;
      color: ${(props) => props.theme.colors.primary};
      font-size: 1.125rem;
      font-weight: 500;
      margin-right: 0.5rem;
    }

    hr {
      border: 1px solid #d7d4f7;
      width: 100%;
      height: 0;
    }
  }

  .quick-actions-cont {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-gap: 3rem;
    align-items: center;
  }

  .modal-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: auto;
    border-radius: 2.5rem;
    padding: 0 1rem;
    text-align: center;

    ::-webkit-scrollbar {
      width: 0;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      color: ${(props) => props.theme.colors.deepPurple};
      width: 20rem;
      margin-top: 1.5rem;
      text-align: center;
    }
    p {
      text-align: center;
      width: 100%;
      max-width: 22rem;
    }

    img {
      width: 35%;
    }

    .modal-btn-cont {
      width: 100%;
    }
    .creation-fee {
      color: ${(props) => props.theme.colors.grey2};
    }
  }

  @media screen and (max-width: 640px) {
    height: 80vh;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 0;
    }
    .salutation-cont {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .salutation {
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
        font-weight: 700;
      }

      .secondary-tabs {
        width: 7rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    .statCard-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }

    .quick-action {
      span {
        color: ${(props) => props.theme.colors.deepPurple};
        font-size: 1rem;
      }

      hr {
        display: none;
      }
    }

    .quick-actions-cont {
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      grid-gap: 0;
      padding-bottom: 6rem;
      margin: 0 auto;
    }
  }
`;
