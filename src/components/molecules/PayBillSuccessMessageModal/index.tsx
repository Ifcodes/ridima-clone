import React, { ReactNode } from "react";
import styled from "styled-components";
import { H1, Paragraph } from "../../atoms/Typography";
import Modal from "../Modal";

const Wrapper = styled.div<{ messageTitleWidth?: string }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .modal-title {
    color: ${(props) => props.theme.colors.deepPurple};
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon-cont {
    width: 20rem;
    height: 16rem;

    img {
      width: 100%;
    }
  }

  .text-cont {
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .message-title {
      width: ${(props) => props.messageTitleWidth || "14rem"};
      text-align: center;
      color: ${(props) => props.theme.colors.green2};
    }

    p {
      width: 20rem;
      margin: 1rem 0;
    }

    h1 {
      margin: 0;
    }
  }

  @media screen and (max-width: 640px) {
    .content {
      width: 100%;
    }
    .icon-cont {
      width: 80%;
    }

    .text-cont {
      p {
        width: 80%;
      }
    }
  }
`;

const PayBillSuccessMessageModal = ({
  icon,
  messageTitle,
  modalTitle,
  message,
  openModal,
  titleWidth,
  closeModal = () => {},
  handleCloseBtn,
}: {
  icon?: ReactNode;
  messageTitle?: string;
  modalTitle?: string;
  message?: string;
  openModal: boolean;
  closeModal?: Function;
  titleWidth?: string;
  handleCloseBtn?: Function;
}) => {
  return (
    <Modal
      showModal={openModal}
      closeModal={closeModal}
      handleCloseBtn={handleCloseBtn}
      showCloseBtn
      width="25%"
      cardHeight="65%"
      mobileCardHeight="60%"
    >
      <Wrapper messageTitleWidth={titleWidth}>
        {modalTitle && <H1 className="modal-title">{modalTitle}</H1>}
        <div className="content">
          <div className="icon-cont">{icon}</div>
          <div className="text-cont">
            <H1 className="message-title">{messageTitle}</H1>
            <Paragraph>{message}</Paragraph>
          </div>
        </div>
      </Wrapper>
    </Modal>
  );
};

export default PayBillSuccessMessageModal;
