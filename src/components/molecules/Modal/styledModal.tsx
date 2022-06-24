import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from{
    margin-top: 150vh;
  }
  to{
    margin-top: 0;
  }
`;

export const ModalWrapper = styled.div<{
  openModal: boolean;
  showCloseBtn?: boolean;
  width?: string;
  cardHeight?: string;
  showModalFooter?: boolean;
  maxWidth?: string;
}>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.6);
  backdrop-filter: blur(10px);
  display: ${(props) => (props.openModal ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 100;

  .modal-card {
    width: ${(props) => props.width || "30%"};
    height: ${(props) => props.cardHeight || "75%"};
    max-height: 40rem;
    max-width: ${(props) => props.maxWidth || "37rem"};
    background-color: white;
    border-radius: ${(props) =>
      props.showModalFooter ? "2.5rem 2.5rem 0 0" : "2.5rem"};
    animation: ${slideIn} 700ms ease-in-out 1;
    overflow-y: ${(props) => !props.showModalFooter && "hidden"};
    position: relative;

    .modal-footer {
      position: absolute;
      bottom: -1.5rem;
      left: 0;
      width: 100%;
      z-index: 150;
    }
  }

  .closeModal-btn {
    width: 100%;
    display: ${(props) => (props.showCloseBtn ? "flex" : "none")};
    justify-content: center;

    hr {
      width: 3rem;
      background-color: ${(props) => props.theme.colors.grey4};
      border: 2px solid ${(props) => props.theme.colors.grey4};
      border-radius: 1rem;
      cursor: pointer;
    }
  }
`;
