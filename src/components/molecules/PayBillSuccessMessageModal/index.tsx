import React, { ReactNode } from "react";
import styled from "styled-components";
import { H1, Paragraph } from "../../atoms/Typography";
import Modal from "../Modal";

const Wrapper = styled.div<{ messageTitleWidth?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .modal-title {
    color: ${(props) => props.theme.colors.deepPurple};
  }
  .icon-cont {
    width: 20rem;
    height: 16rem;

    img {
      width: 100%;
    }
  }

  .text-cont {
    margin: 5rem auto;
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
}: {
  icon?: ReactNode;
  messageTitle?: string;
  modalTitle?: string;
  message?: string;
  openModal: boolean;
  closeModal?: Function;
  titleWidth?: string;
}) => {
  return (
    <Modal showModal={openModal} closeModal={closeModal} showCloseBtn>
      <Wrapper messageTitleWidth={titleWidth}>
        <H1 className="modal-title">{modalTitle}</H1>
        <div className="icon-cont">{icon}</div>
        <div className="text-cont">
          <H1 className="message-title">{messageTitle}</H1>
          <Paragraph>{message}</Paragraph>
        </div>
      </Wrapper>
    </Modal>
  );
};

export default PayBillSuccessMessageModal;
