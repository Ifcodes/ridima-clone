import styled from "styled-components";

export const SecurityPageWrapper = styled.div`
  width: 100%;

  .title-cont {
    margin: 2rem 0 2rem 1rem;
  }

  .actions-cont {
    width: 50%;
  }

  @media screen and (max-width: 640px) {
    height: 90%;
    padding: 1.5rem;
    overflow-y: auto;

    .actions-cont {
      width: 100%;
    }
  }
`;

export const ChangePinWrapper = styled.div`
  width: 100%;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem 2.5rem;

  .pin-modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .error-alert {
    color: ${(props) => props.theme.colors.red};
    margin-top: 0.7rem;
  }

  .profile-pics {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }

  .modal-title {
    text-align: center;
    color: ${(props) => props.theme.colors.deepPurple};
    font-weight: 700;
    margin: 1.5rem 0 2rem;
  }

  .enter-pin {
    color: ${(props) => props.theme.colors.blue};
    text-align: center;
  }
  .pin-input-cont {
    justify-content: center;
    border: none;
  }

  .seperator {
    margin: 0 0.5rem;
  }

  a {
    margin-top: 3rem;
  }
`;

export const ChangePasswordModalWrapper = styled.div`
  width: 100%;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem 2rem;

  h1,
  p {
    color: ${(props) => props.theme.colors.deepPurple};
  }

  form {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0;

    a {
      margin-top: 3rem;
    }

    .password-input-fields {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .error-alert {
        color: ${(props) => props.theme.colors.red};
        margin-top: 0.5rem;
      }
    }

    .password-cta-cont {
      width: 100%;
      display: text;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;
