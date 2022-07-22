import styled, { css } from "styled-components";

export const MessageCardWrapper = styled.div<{
  height?: string;
  width?: string;
}>`
  width: ${(props) => props.width || "30%"};
  height: ${(props) => props.height || "75vh"};
  max-width: 35rem;
  max-height: 42rem;
  background-color: white;
  border-radius: 2.5rem;
  padding: 0 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .msg-content {
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .close-Icon {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    cursor: pointer;
  }
  .icon-cont {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;

    svg {
      width: 80%;
      height: 80%;
    }
    img {
      width: 100%;
    }
  }
  .title-cont {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      width: 20rem;
    }
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 100vh;
    overflow-y: auto;

    .icon-cont {
      width: 80%;

      svg {
        width: 80%;
        height: 80%;
      }
    }
    .close-Icon {
      display: none;
    }
  }
`;
