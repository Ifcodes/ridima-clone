import styled from "styled-components";

export const AccountPageWrapper = styled.div`
  width: 100%;

  .profile-detail {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.4rem;

    .img-cont {
      display: flex;
      align-items: center;

      .profile-name-cont {
        margin-left: 1rem;
        display: flex;
        flex-direction: column;

        .profile-name {
          color: ${(props) => props.theme.colors.grey1};
          font-size: 1.5rem;
          font-weight: 700;
        }

        .user-handle {
          color: ${(props) => props.theme.colors.blue};
          font-weight: 500;
          font-size: 1.125rem;
          margin-top: 0.5rem;
        }
      }
    }

    .edit-btn {
      width: 7rem;
      height: max-content;
      border-radius: 1.5rem;
      color: white;
      background-color: ${(props) => props.theme.colors.blue};
      padding: 0.9rem 1rem;
      border: none;
      cursor: pointer;
    }
  }

  .hr-line {
    hr {
      width: 100%;
      height: 1px;
      border: 0.5px solid ${(props) => props.theme.colors.grey5};
    }
    margin: 4rem 0;
  }

  .content-wrapper {
    width: 60%;
    display: flex;
    flex-direction: column;
    background-color: #f8f7fe;
    border-radius: 2.5rem;
    padding: 2rem 2.5rem;

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1.5rem 0;
      cursor: pointer;

      .icon-cont {
        display: flex;
        align-items: center;

        .content-text {
          margin-left: 2rem;
          font-size: 1.125rem;
          color: ${(props) => props.theme.colors.grey1};
        }
      }
    }
  }
`;

export const EditProfileWrapper = styled.div`
  width: 100%;

  .profile-pics {
    width: max-content;
    height: max-content;
    border-radius: 100%;
    position: relative;
    margin-top: 3rem;

    .camera {
      position: absolute;
      bottom: 0;
      right: 0;
      cursor: pointer;
    }
  }

  .form-cont {
    width: 40%;
    margin-top: 3.5rem;

    .disabled-input {
      color: rgba(63, 30, 75, 0.4);
    }
  }
`;
