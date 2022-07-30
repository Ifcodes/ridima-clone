import styled from "styled-components";

export const TopThreeCardWrapper = styled.div<{ isNumberOne?: boolean }>`
  width: ${({ isNumberOne }) => (isNumberOne ? "7.5rem" : "4.5rem")};
  display: flex;
  flex-direction: column;
  align-items: center;

  .indicator-wrapper {
    display: flex;
    align-items: center;

    .position {
      color: white;
      font-size: 0.75rem;
    }
  }

  .leader-img-cont {
    width: 100%;
    height: ${({ isNumberOne }) => (isNumberOne ? "7.5rem" : "4.5rem")};
    border: 3px solid white;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .leader-text-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;

    .username {
      color: white;
      font-size: 1.125rem;
      font-weight: 500;
    }

    .leader-amount {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  @media screen and (max-width: 640px) {
    width: ${({ isNumberOne }) => (isNumberOne ? "6.5rem" : "3.5rem")};

    .leader-img-cont {
      width: 100%;
      height: max-content;
      border: 3px solid white;
      border-radius: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const OtherLeaderCardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1.875rem;

  .number-indicator-wrapper {
    display: flex;
    align-items: center;
    margin-right: 1rem;

    .position {
      margin-left: 0.5rem;
    }
  }

  .content-wrapper {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;

    .img-user-cont {
      display: flex;
      align-items: center;

      img {
        width: 3rem;
        height: 3rem;
      }

      .username {
        color: ${(props) => props.theme.colors.grey1};
        margin-left: 1rem;
      }
    }

    .date-cont {
      .date {
        color: ${(props) => props.theme.colors.grey2};
        font-size: 0.625rem;
      }
    }
    .amount-cont {
      .leader-amount {
        font-size: 1rem;
        color: ${(props) => props.theme.colors.deepPurple};
      }

      .date-mobile {
        display: none;
      }
    }
  }

  @media screen and (max-width: 640px) {
    .content-wrapper {
      display: flex;
      justify-content: space-between;

      .date-cont {
        display: none;
      }

      .amount-cont {
        display: flex;
        flex-direction: column;

        .date-mobile {
          display: block;
          line-height: 16px;
          color: ${(props) => props.theme.colors.grey2};
          font-size: 0.625rem;
        }
      }
    }
  }
`;
