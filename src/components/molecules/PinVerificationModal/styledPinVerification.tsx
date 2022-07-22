import styled from "styled-components";

export const PinVerificationWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .modal-title-cont {
    display: flex;
    flex-direction: column;
    align-items: center;

    .user {
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
      color: ${(props) => props.theme.colors.blue};
      text-align: center;
    }

    .profile-pics {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 3rem;
    }
  }

  .success-title-cont {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .success-msg-title {
      color: #27ae60;
      font-weight: 700;
      margin: 0.5rem 0;
      text-align: center;
      font-size: 1.75rem;
    }

    .illustration {
      width: 100%;
      /* height: 12rem; */
    }

    p {
      text-align: center;
      width: 20rem;
    }
  }

  .pin-verify-btn-cont {
    width: 100%;
  }

  @media screen and (max-width: 640px) {
    .success-title-cont {
      margin-top: 3rem;
      .illustration {
        width: 80%;
      }

      p {
        width: 80%;
      }
    }
  }
`;
