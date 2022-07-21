import React, { useState } from "react";
import Button from "../../../../../components/atoms/Buttons";
import { Paragraph } from "../../../../../components/atoms/Typography";
import Modal from "../../../../../components/molecules/Modal";
import { resetTradeValue } from "../../../../../Entity/TradeValue";
import { CardTermsModalWrapper } from "../../../styledTradeGiftCard";
import ErrorMessageCard from "./errorMessageCard";
import SuccessMessageCard from "./successMessageCard";

const CardTermsModal = ({
  openModal,
  closeModal = () => {},
  handleCloseBtn = () => {},
  handleConfirm = () => {},
}: {
  openModal: boolean;
  closeModal?: Function;
  handleCloseBtn?: Function;
  handleConfirm?: Function;
}) => {
  const [stage, setStage] = useState(0);
  const [successFull, setSuccessful] = useState(false);

  const onProceed = () => {
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
  return (
    <Modal
      showModal={openModal}
      closeModal={onModalClose}
      handleCloseBtn={() => onModalClose()}
      width={"28%"}
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
        <SuccessMessageCard />
      ) : stage === 1 && !successFull ? (
        <ErrorMessageCard />
      ) : (
        <CardTermsModalWrapper>
          <div className="title">
            <h1>Card Terms</h1>
            <Paragraph>
              A cash receipt is required for this trade as well as full pictures
              of the receipt and card. This trade is for 50 to 100 dollars
              Amazon giftcards.
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
