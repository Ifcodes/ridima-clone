import React, { ReactNode, useRef, useState } from "react";
import { ModalWrapper } from "./styledModal";
import { useClickAway } from "react-use";

type ModalProps = {
  children: ReactNode;
  showModal: boolean;
  closeModal: Function;
  showCloseBtn?: boolean;
  handleCloseBtn?: Function;
  width?: string;
  height?: string;
  cardHeight?: string;
};
const Modal = ({
  children,
  showModal = false,
  showCloseBtn,
  closeModal = () => {},
  handleCloseBtn = () => {},
  width,
  cardHeight,
}: ModalProps) => {
  const clickRef = useRef(null);

  useClickAway(clickRef, () => {
    closeModal();
  });

  return (
    <ModalWrapper
      openModal={showModal}
      showCloseBtn={showCloseBtn}
      width={width}
      cardHeight={cardHeight}
    >
      <div className="modal-card" ref={clickRef}>
        {showCloseBtn && (
          <div className="closeModal-btn" onClick={() => handleCloseBtn()}>
            <hr />
          </div>
        )}
        {children}
      </div>
    </ModalWrapper>
  );
};

export default Modal;
