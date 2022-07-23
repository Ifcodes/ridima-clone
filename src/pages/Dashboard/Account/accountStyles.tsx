import styled from "styled-components";

export const AccountPageWrapper = styled.div`
  width: 100%;

  .profile-detail {
    width: 45%;
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
      width: 8rem;
      height: max-content;
      border-radius: 1.5rem;
      color: white;
      background-color: ${(props) => props.theme.colors.blue};
      padding: 0.9rem 1rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .edit-arrow {
      display: none;
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
    width: 55%;
    display: flex;
    flex-direction: column;
    background-color: #f8f7fe;
    border-radius: 2.5rem;
    padding: 1rem 2.5rem;
    margin-top: 5rem;

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1rem 0;
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

  .mobile-actions {
    display: none;
  }

  @media screen and (max-width: 640px) {
    h1 {
      margin-top: 0;
    }

    .profile-detail {
      width: 100%;
      margin: 1.5rem 0 0;
      padding-left: 1rem;

      .edit-btn {
        display: none;
      }

      .edit-arrow {
        display: block;
      }

      .img-cont {
        .profile-name-cont {
          .profile-name {
            font-size: 1.2rem;
          }
        }
      }
    }

    .hr-line {
      display: none;
    }

    .content-wrapper {
      width: 100%;
      margin: 2rem 0 0;
      padding: 0 0 0 1rem;
      border-radius: 0;
      background-color: transparent;
      overflow-y: auto;

      .content {
        margin: 1rem 0;

        .icon-cont {
          .content-text {
            margin-left: 1rem;
          }
        }
      }
    }

    .mobile-actions {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-left: 1rem;
      padding-bottom: 8rem;

      .content {
        margin: 1rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        .icon-cont {
          display: flex;
          align-items: center;

          .content-text {
            margin-left: 1rem;
            font-size: 1.125rem;
            color: ${(props) => props.theme.colors.grey1};
          }
        }

        .logout {
          display: none;
        }

        .arrow {
          display: block;
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

  @media screen and (max-width: 640px) {
    padding: 1rem 1.5rem;
    height: 90%;

    overflow-y: auto;
    .profile-pics {
      margin: 2rem auto;
    }

    .form-cont {
      width: 100%;
      margin-top: 2;
    }
  }
`;
