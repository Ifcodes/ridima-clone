import React, { ReactNode, useRef, useState } from "react";
import { ModalWrapper } from "./styledModal";
import { useClickAway } from "react-use";
import ModalFooterDesign from "../../atoms/vectors/modalFooterDesign";

type ModalProps = {
  children: ReactNode;
  showModal: boolean;
  closeModal: Function;
  showCloseBtn?: boolean;
  handleCloseBtn?: Function;
  width?: string;
  height?: string;
  cardHeight?: string;
  showModalFooterDesign?: boolean;
  maxWidth?: string;
};
const Modal = ({
  children,
  showModal = false,
  showCloseBtn,
  closeModal = () => {},
  handleCloseBtn = () => {},
  width,
  maxWidth,
  cardHeight,
  showModalFooterDesign,
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
      maxWidth={maxWidth}
      cardHeight={cardHeight}
      showModalFooter={showModalFooterDesign}
    >
      <div className="modal-card" ref={clickRef}>
        {showCloseBtn && (
          <div className="closeModal-btn" onClick={() => handleCloseBtn()}>
            <hr />
          </div>
        )}
        {children}
        {showModalFooterDesign && (
          <div className="modal-footer">
            <ModalFooterDesign />
          </div>
        )}
      </div>
    </ModalWrapper>
  );
};

export default Modal;
