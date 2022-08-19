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
  mobileCardHeight?: string;
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
  z-index: 1000;

  .modal-card {
    width: ${(props) => props.width || "30%"};
    min-height: ${(props) => props.cardHeight || "35%"};
    max-height: 40rem;
    max-width: ${(props) => props.maxWidth || "37rem"};
    background-color: white;
    border-radius: ${(props) =>
      props.showModalFooter ? "2.5rem 2.5rem 0 0" : "2.5rem"};
    animation: ${slideIn} 700ms ease-in-out 1;
    overflow-y: ${(props) => !props.showModalFooter && "hidden"};
    padding-top: ${({ showCloseBtn }) => showCloseBtn && "2rem"};
    position: relative;

    .closeicon-cont {
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .modal-footer {
      position: absolute;
      bottom: -1rem;
      left: 0;
      width: 100%;
      z-index: 1150;
    }
  }

  .closeModal-btn {
    width: 100%;
    display: ${(props) => (props.showCloseBtn ? "flex" : "none")};
    justify-content: center;
    /* margin-bottom: ${({ showCloseBtn }) => showCloseBtn && "2rem"}; */

    hr {
      width: 3rem;
      background-color: ${(props) => props.theme.colors.grey4};
      border: 2px solid ${(props) => props.theme.colors.grey4};
      border-radius: 1rem;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 640px) {
    .modal-card {
      width: 80%;
      max-width: 25rem;
      max-height: 40rem;
      min-height: ${(props) => props.mobileCardHeight || "45%"};
    }
  }
`;
