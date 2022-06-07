import React, { useState } from "react";
import Button from "../../../../components/atoms/Buttons";
import { Paragraph } from "../../../../components/atoms/Typography";
import Modal from "../../../../components/molecules/Modal";
import {
  buyGiftCardsState,
  setBuyGiftcardConfirmModalStage,
  setIsConfirmed,
  setShowConfirmationModal,
} from "../../../../Entity/BuyGiftCardsEntity";
import SuccessMessageCard from "../../SellGiftCard/ActiveGiftCardPage/Widgets/successMessageCard";
import { CardTermsModalWrapper } from "../../styledTradeGiftCard";

const ConfirmModal = () => {
  const showModal = buyGiftCardsState.use().showConfirmationModal;
  const stage = buyGiftCardsState.use().modalStage;
  const cardAmount = buyGiftCardsState.use().cardPurchaseAmount;
  const expectedValue = buyGiftCardsState.use().expectedValue;
  const successfull = buyGiftCardsState.use().confirmed;

  const handleConfirmation = () => {
    setIsConfirmed(true);
    setBuyGiftcardConfirmModalStage("next");
  };

  const closeModal = () => {
    setShowConfirmationModal(false);
    setIsConfirmed(false);
  };
  return (
    <Modal showModal={showModal} closeModal={() => closeModal()} showCloseBtn>
      <CardTermsModalWrapper>
        {stage === 1 && successfull && <SuccessMessageCard />}
        {stage === 0 && (
          <>
            <div className="title">
              <h1>Confirm</h1>
              <Paragraph>
                You’re about to purchase ${`${cardAmount}`} of Amazon Giftcard,
                worth N{`${expectedValue}`}. By clicking Confirm below, you
                agree to our terms of purchase.
              </Paragraph>
            </div>
            <div className="btn-cont">
              <Button
                buttonBgType="modal"
                btnText="Confirm"
                width="100%"
                onClick={() => handleConfirmation()}
              />
            </div>
          </>
        )}
      </CardTermsModalWrapper>
    </Modal>
  );
};

export default ConfirmModal;
