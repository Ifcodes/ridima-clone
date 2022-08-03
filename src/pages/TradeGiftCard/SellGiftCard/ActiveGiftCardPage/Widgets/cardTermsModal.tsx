import React, { useState } from "react";
import Button from "../../../../../components/atoms/Buttons";
import { Paragraph } from "../../../../../components/atoms/Typography";
import Modal from "../../../../../components/molecules/Modal";
import {
  clearSellGiftCardStates,
  sellGiftCardsStates,
  setSellGiftCardSelectedCategory,
} from "../../../../../Entity/SellGiftCardEntity";
import { resetTradeValue } from "../../../../../Entity/TradeValue";
import { CardTermsModalWrapper } from "../../../styledTradeGiftCard";
import ErrorMessageCard from "./errorMessageCard";
import SuccessMessageCard from "../../../../../components/molecules/SuccessMessageCard/successMessageCard";

const CardTermsModal = ({
  openModal,
  closeModal = () => {},
  handleCloseBtn = () => {},
  handleConfirm = () => {},
  selectedCardTitle,
}: {
  openModal: boolean;
  closeModal?: Function;
  handleCloseBtn?: Function;
  handleConfirm?: Function;
  selectedCardTitle?: string;
}) => {
  const selectedCategory = sellGiftCardsStates.use().selectedSubCatecory;
  const [stage, setStage] = useState(0);
  const [successFull, setSuccessful] = useState(false);

  const onProceed = () => {
    // api request goes here
    setSuccessful(true);
    if (successFull) {
      setStage(stage + 1);
      handleConfirm();
      resetTradeValue();
    }
    return;
  };

  const onModalClose = () => {
    if (stage === 1) {
      setStage(0);
    }
    handleCloseBtn();
    closeModal();
  };

  const handleClearStates = () => {
    clearSellGiftCardStates();
  };
  return (
    <Modal
      showModal={openModal}
      closeModal={onModalClose}
      handleCloseBtn={() => onModalClose()}
      width={"28%"}
      cardHeight={
        stage === 1 && successFull
          ? ""
          : stage === 1 && !successFull
          ? ""
          : "50%"
      }
      mobileCardHeight={
        stage === 1 && successFull
          ? "85%"
          : stage === 1 && !successFull
          ? "65%"
          : "45%"
      }
      showCloseBtn
    >
      {stage === 1 && successFull ? (
        <SuccessMessageCard handleOtherActions={handleClearStates} />
      ) : stage === 1 && !successFull ? (
        <ErrorMessageCard />
      ) : (
        <CardTermsModalWrapper>
          <div className="title">
            <h1>Card Terms</h1>
            <Paragraph>
              A cash receipt is required for this trade as well as full pictures
              of the receipt and card. This trade is for{" "}
              <strong>{selectedCategory}</strong> dollars
              <strong>{` ${selectedCardTitle}`}</strong> giftcards.
            </Paragraph>
          </div>
          <div className="btn-cont">
            <Button
              buttonBgType="modal"
              btnText="Accept Terms"
              onClick={() => onProceed()}
              mt="0"
            />
          </div>
        </CardTermsModalWrapper>
      )}
    </Modal>
  );
};

export default CardTermsModal;
