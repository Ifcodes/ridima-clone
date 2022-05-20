import styled, { keyframes } from "styled-components";

const popout = keyframes`
  from{
    margin-top: 150vh;
  }
  to{
    margin-top: 0;
  }
`

export const ModalWrapper = styled.div<{
  openModal: boolean, 
  showCloseBtn?: boolean,
  width?: string,
  cardHeight?: string,
}>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.6);
  backdrop-filter: blur(10px);
  display: ${props => props.openModal ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 100;

  .modal-card{
    width: ${props => props.width || '45%'};
    height: 70vh;
    max-height: ${props => props.cardHeight || '80vh'};
    max-width: 35rem;
    background-color: white;
    border-radius: 2.5rem;
    animation: ${popout} 700ms ease-in-out 1; 
  }

  .closeModal-btn{
    width: 100%;
    display: ${props => props.showCloseBtn ? 'flex' : 'none'};
    justify-content: center;

    hr{
      width: 3rem;
      background-color: ${props => props.theme.colors.grey4};
      border: 2px solid ${props => props.theme.colors.grey4};
      border-radius: 1rem;
      cursor: pointer;
    }
  }
`