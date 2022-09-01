import styled from "styled-components";

export const SuccessMessageWrapper = styled.div<{
  errorMessage?: boolean;
  pl?: string;
  pr?: string;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${(props) => (props.errorMessage ? "3.5rem" : "2.5rem")};
  padding-top: ${(props) => (props.errorMessage ? "1.7rem" : "")};
  padding-left: ${(props) => props.pl || "1rem"};
  padding-right: ${(props) => props.pr || "1rem"};

  .msg-modal-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${(props) => (props.errorMessage ? "2rem 0 0" : "")};
  }

  .img-cont {
    width: 80%;
    height: 14rem;
    max-width: 20rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .msg-text-cont {
    justify-self: flex-end;
    text-align: center;
    width: 22rem;
    margin: 1rem 0 0;

    h1 {
      margin: 0;
      font-size: 1.75rem;
      color: ${(props) =>
        props.errorMessage
          ? props.theme.colors.red
          : props.theme.colors.green2};
    }
  }

  .btn-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
  }

  @media screen and (max-width: 640px) {
    padding: 1rem;

    .img-cont {
      width: 100%;
      height: 14rem;
    }

    .msg-text-cont {
      width: 90%;

      h1 {
        margin: 0;
      }
    }

    .btn-wrapper {
      padding: 0;
    }
  }
`;
