import React, { useState } from "react";
import Button from "../../../../../components/atoms/Buttons";
import { Paragraph } from "../../../../../components/atoms/Typography";
import Modal from "../../../../../components/molecules/Modal";
import {
  hotGiftCardsStates,
  setActiveCardStage,
  setHotGiftCardTab,
  setOpenTermsModal,
} from "../../../../../Entity/HotGiftCardsEntity";
import { CardTermsModalWrapper } from "../../../styledTradeGiftCard";
import ErrorMessageCard from "./errorMessageCard";
import SuccessMessageCard from "./successMessageCard";

const CardTermsModal = () => {
  const states = hotGiftCardsStates.use();
  const openModal = states.openTermsModal;
  const selectedCategory = states.selectedSubCategory;

  const closeModal = () => {
    setOpenTermsModal(false);
  };

  const acceptTerms = () => {
    setActiveCardStage("next");
    closeModal();
  };
  return (
    <Modal
      showModal={openModal}
      closeModal={closeModal}
      showCloseBtn
      mobileCardHeight="35%"
    >
      <CardTermsModalWrapper>
        <div className="title">
          <h1>Card Terms</h1>
          <Paragraph>
            A cash receipt is required for this trade as well as full pictures
            of the receipt and card. This trade is for{" "}
            <strong>{selectedCategory}</strong>
            {"  "}dollars Amazon giftcards.
          </Paragraph>
        </div>
        <div className="btn-cont">
          <Button
            buttonBgType="modal"
            btnText="Accept Terms"
            width="100%"
            onClick={() => acceptTerms()}
          />
        </div>
      </CardTermsModalWrapper>
    </Modal>
  );
};

export default CardTermsModal;
