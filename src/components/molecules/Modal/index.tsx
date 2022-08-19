import React, { ReactNode, useRef, useState } from "react";
import { ModalWrapper } from "./styledModal";
import { useClickAway } from "react-use";
import ModalFooterDesign from "../../atoms/vectors/modalFooterDesign";
import CloseIcon from "../../atoms/CloseIcon";
import { CircledBackground } from "../../atoms/CircledBackground";
import CloseIconNoBg from "../../atoms/vectors/CloseIconNoBg";

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
  mobileCardHeight?: string;
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
  mobileCardHeight,
  showModalFooterDesign,
}: ModalProps) => {
  const clickRef = useRef(null);

  useClickAway(clickRef, (e) => {
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
      mobileCardHeight={mobileCardHeight}
    >
      <div className="modal-card" ref={clickRef}>
        {showCloseBtn && (
          <>
            {/* <div className="closeModal-btn" onClick={() => handleCloseBtn()}>
              <hr />
            </div> */}
            <div className="closeicon-cont" onClick={() => handleCloseBtn()}>
              <CircledBackground
                width="3rem"
                height="3rem"
                svgWidth="60%"
                mobileWidth="2rem"
                mobileHeight="2rem"
              >
                <CloseIconNoBg />
              </CircledBackground>
            </div>
          </>
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
