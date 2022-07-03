import styled from "styled-components";

export const LoginWrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem 2.5rem;
  overflow-y: auto;

  .input-fields {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* .alternative {
      width: 27rem;
      max-width: 100%;
      display: flex;
      align-items: center;
      margin-top: 2rem;

      .right-vec {
        margin: 0;
        display: flex;
        align-items: center;
        transform: rotate(180deg);
      }

      span {
        width: 50%;
        font-size: 0.87rem;
        font-weight: 500;
        text-align: center;
        color: ${(props) => props.theme.colors.grey4};
      }
    } */

    @media screen and (max-width: 640px) {
      width: 100%;
      max-width: 45rem;

      h1 {
        color: ${(props) => props.theme.colors.deepPurple};
        font-size: 1.75rem;
      }
    }
  }

  .btn-cont {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .alternative-nav-cont {
      margin-top: 1rem;
    }

    .forgot-password {
      color: ${(props) => props.theme.colors.primary};
      margin: 0;
      font-size: 1rem;
    }

    /* @media screen and (max-width: 640px) {
      width: 100%;
      max-width: 45rem;
      padding-bottom: 2rem;
    } */
  }

  @media screen and (max-width: 640px) {
    height: 100%;
    padding: 0 1rem 5.5rem;

    .input-fields {
      width: 90%;

      h1 {
        color: ${(props) => props.theme.colors.deepPurple};
        margin: 0;
      }
    }
  }
`;
