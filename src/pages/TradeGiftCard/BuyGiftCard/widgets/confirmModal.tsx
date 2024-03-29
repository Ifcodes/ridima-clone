import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/atoms/Buttons";
import { Paragraph } from "../../../../components/atoms/Typography";
import Modal from "../../../../components/molecules/Modal";
import {
  buyGiftCardsState,
  resetBuyGiftCardsState,
  setBuyGiftcardConfirmModalStage,
  setCardPurchaseAmount,
  setExpectedValue,
  setFixedCurrentStage,
  setIsConfirmed,
  setShowConfirmationModal,
} from "../../../../Entity/BuyGiftCardsEntity";
import ErrorMessageCard from "../../SellGiftCard/ActiveGiftCardPage/Widgets/errorMessageCard";
import SuccessMessageCard from "../../../../components/molecules/SuccessMessageCard/successMessageCard";
import { CardTermsModalWrapper } from "../../styledTradeGiftCard";
import { setActiveTabChange } from "../../../../Entity/TradeGiftCardsEntity";

const ConfirmModal = () => {
  const navigate = useNavigate();
  const showModal = buyGiftCardsState.use().showConfirmationModal;
  const stage = buyGiftCardsState.use().modalStage;
  const cardAmount = buyGiftCardsState.use().cardPurchaseAmount;
  const expectedValue = buyGiftCardsState.use().expectedValue;
  const successfull = buyGiftCardsState.use().confirmed;

  const handleConfirmation = () => {
    setIsConfirmed(true);
    setBuyGiftcardConfirmModalStage("next");
    // setFixedCurrentStage(0);
    setExpectedValue(0);
    setCardPurchaseAmount(null);
  };

  const closeModal = () => {
    if (stage === 1) {
      navigate("/trade-giftcards");
      resetBuyGiftCardsState();
      setActiveTabChange("reset");
    } else {
      setShowConfirmationModal(false);
      setIsConfirmed(false);
    }
  };

  const handleSuccessModalBtn = (type: string) => {
    resetBuyGiftCardsState();
    setActiveTabChange("reset");
  };

  return (
    <Modal
      showModal={showModal}
      closeModal={() => closeModal()}
      cardHeight={
        stage === 1 && successfull
          ? "40rem"
          : stage === 1 && !successfull
          ? "40rem"
          : "25rem"
      }
      mobileCardHeight={
        stage === 1 && successfull
          ? "41rem"
          : stage === 1 && !successfull
          ? "40rem"
          : "15rem"
      }
      width="28%"
      showCloseBtn
      handleCloseBtn={() => closeModal()}
    >
      {stage === 1 && successfull && (
        <SuccessMessageCard handleOtherActions={handleSuccessModalBtn} />
      )}
      {stage === 1 && !successfull && <ErrorMessageCard />}
      {stage === 0 && (
        <CardTermsModalWrapper>
          <div className="title">
            <h1>Confirm</h1>
            <Paragraph>
              You’re about to purchase ${`${cardAmount}`} of Amazon Giftcard,
              worth N{`${expectedValue}`}. By clicking Confirm below, you agree
              to our terms of purchase.
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
        </CardTermsModalWrapper>
      )}
    </Modal>
  );
};

export default ConfirmModal;
