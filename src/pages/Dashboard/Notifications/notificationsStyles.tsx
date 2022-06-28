import styled from "styled-components";

export const NotificationPageWrapper = styled.div`
  width: 100%;

  .heading {
    width: 100%;
    height: 14.7rem;
    background-color: ${(props) => props.theme.colors.blue};
    background-image: url("/vectors/BlueHeadingRecWithPattern.svg");
    background-size: cover;
    background-repeat: none;
    padding: 2rem 3rem;
    display: flex;
    position: relative;

    .title-cont {
      width: 16rem;
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;

      h1 {
        color: white;
        margin: 0;
      }

      .number {
        width: 2.5rem;
        height: 2.5rem;
        font-size: 1.25rem;
        font-weight: 500;
        border-radius: 100%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${(props) => props.theme.colors.red};
      }
    }
  }

  .content {
    padding: 2rem 3rem;

    .today-date {
      color: ${(props) => props.theme.colors.grey3};
      font-weight: 500;
    }
  }

  .notifications-wrapper {
    margin-top: 2rem;
    padding-bottom: 6rem;

    .current,
    .previous {
      width: 70%;
    }

    .line-title {
      margin: 1.2rem 0;
    }
  }
`;

export const NotificationItemCard = styled.div<{
  isActive?: boolean;
  status?: string;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.isActive ? "#F8F7FE" : "")};
  border-top: ${(props) =>
    props.isActive ? "1.01987px solid #c3bef3" : "none"};
  padding: 0.8rem 1.5rem;
  margin-bottom: 1.5rem;
  cursor: pointer;

  .text-cont {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    .title {
      color: ${(props) => props.theme.colors.grey1};
      font-weight: 500;

      .status {
        color: ${(props) =>
          props.status === "Successful"
            ? props.theme.colors.green2
            : props.status === "Failed"
            ? props.theme.colors.red
            : props.status === "Rejected"
            ? props.theme.colors.red
            : ""};
        margin-left: 0.5rem;
      }
    }

    .description {
      color: ${(props) => props.theme.colors.grey3};
      font-size: 0.8rem;
      margin-top: 0.5rem;
    }
  }
`;
