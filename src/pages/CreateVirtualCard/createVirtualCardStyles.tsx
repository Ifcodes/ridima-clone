import styled from "styled-components";

export const MainWrapper = styled.section`
  width: 100%;

  .stage-title-cont {
    display: flex;
    align-items: center;

    .home {
      color: ${(props) => props.theme.colors.grey4};
      font-weight: 700;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 640px) {
    height: 80%;
    overflow: hidden;

    .header {
      width: 100%;
      padding: 1rem 1rem 0;
    }
    .stage-title-cont {
      display: none;
    }
  }
`;

export const CreateVirtualCardWrapper = styled.div`
  width: 30rem;
  max-width: 35rem;

  .form-title-cont {
    margin: 2rem 0;

    h1 {
      color: ${(props) => props.theme.colors.deepPurple};
    }
  }

  .card-design-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    h1 {
      color: ${(props) => props.theme.colors.deepPurple};
      font-size: 1.75rem;
      font-weight: 700;
      margin: 0;
      text-align: center;
    }

    .cards-wrapper {
      width: 100%;
      height: 60%;
      display: flex;
      align-items: center;
      overflow-x: auto;
      gap: 2rem;

      .card-cont {
        height: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
          margin-top: 1rem;
          color: ${(props) => props.theme.colors.blue};
          text-align: center;
        }
      }
    }

    .btn-cont {
      width: 100%;
    }
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    max-width: 100%;
    height: 80%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .form-title-cont {
      margin: 0 0 1rem;
      padding: 0 1rem;
      text-align: center;

      h1 {
        font-size: 1.5rem;
        margin: 0;
      }

      p {
        margin-bottom: 0;
      }
    }

    form {
      width: 100%;
      padding: 0 1rem;
      margin-top: 0;
    }
  }
`;
export const StageTitleWrapper = styled.div<{
  isActive?: boolean;
  darkBgShade?: boolean;
}>`
  cursor: pointer;
  display: flex;
  font-weight: 700;

  .home {
    color: ${(props) => props.theme.colors.grey4};
  }

  .arrow {
    color: ${(props) =>
      props.isActive && !props.darkBgShade
        ? props.theme.colors.deepPurple
        : props.isActive && props.darkBgShade
        ? "white"
        : props.theme.colors.grey4};
    margin: 0 0.5rem;
  }

  .title {
    color: ${(props) =>
      props.isActive && !props.darkBgShade
        ? props.theme.colors.deepPurple
        : props.isActive && props.darkBgShade
        ? "white"
        : props.theme.colors.grey4};
  }
`;

export const FundYourCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 22rem 1fr;
  grid-gap: 12rem;

  .form-cont {
    margin: 2rem 0;

    h1 {
      color: ${(props) => props.theme.colors.deepPurple};
    }

    form {
      margin-top: 2rem;

      .exchange-rate-text {
        color: ${(props) => props.theme.colors.blue};
        margin-top: 1rem;
      }
    }
  }

  .virtual-card-cont {
    margin-top: 2rem;
  }

  .modal-content {
    width: 100%;
    height: 100%;
    padding: 1rem 2rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .modal-title {
      color: ${(props) => props.theme.colors.deepPurple};
      font-size: 1.75rem;
      font-weight: 700;
      text-align: center;
    }

    p {
      width: 20rem;
    }

    .user {
      text-align: center;
      color: ${(props) => props.theme.colors.deepPurple};
      font-weight: 700;
      margin: 1.5rem 0 2rem;
    }

    .pin-input-cont {
      justify-content: center;
      border: none;
    }

    .seperator {
      margin: 0 0.5rem;
    }

    a {
      color: ${(props) => props.theme.colors.blue};
      text-align: center;
    }

    .success-msg-title {
      color: #27ae60;
      font-weight: 700;
      margin: 0.5rem 0;
      text-align: center;
      font-size: 1.75rem;
    }

    .profile-pics {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 3rem;
    }

    .illustration {
      width: 12rem;
      height: 12rem;
    }

    .success-title-cont {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* justify-content: center; */

      p {
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 640px) {
    height: 80%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    grid-gap: 0;
    overflow-y: auto;

    .form-cont {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        margin-top: 0;
        font-size: 1.5rem;
        text-align: center;
      }

      p {
        text-align: center;
        width: 80%;
        margin: 0;
      }

      form {
        width: 100%;
        padding: 0 1rem;
        margin-top: 0;
      }
    }

    .virtual-card-cont {
      margin-top: 1rem;
    }
    .modal-content {
      padding: 1rem;
      overflow-y: auto;

      p {
        width: 100%;
        text-align: center;
      }
    }
  }
`;
