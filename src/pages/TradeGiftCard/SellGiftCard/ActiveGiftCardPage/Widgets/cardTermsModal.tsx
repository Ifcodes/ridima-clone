import React, { useState } from "react";
import Button from "../../../../../components/atoms/Buttons";
import { Paragraph } from "../../../../../components/atoms/Typography";
import Modal from "../../../../../components/molecules/Modal";
import { CardTermsModalWrapper } from "../../../styledTradeGiftCard";
import ErrorMessageCard from "./errorMessageCard";
import SuccessMessageCard from "./successMessageCard";

const CardTermsModal = ({
  openModal,
  closeModal = () => {},
}: {
  openModal: boolean;
  closeModal?: Function;
}) => {
  const [stage, setStage] = useState(0);
  const [successFull, setSuccessful] = useState(false);
  return (
    <Modal showModal={openModal} closeModal={closeModal} showCloseBtn>
      <CardTermsModalWrapper>
        {stage === 1 && successFull ? (
          <SuccessMessageCard />
        ) : stage === 1 && !successFull ? (
          <ErrorMessageCard />
        ) : (
          <>
            <div className="title">
              <h1>Card Terms</h1>
              <Paragraph>
                A cash receipt is required for this trade as well as full
                pictures of the receipt and card. This trade is for 50 to 100
                dollars Amazon giftcards.
              </Paragraph>
            </div>
            <div className="btn-cont">
              <Button
                buttonBgType="modal"
                btnText="Accept Terms"
                width="100%"
                onClick={() => setStage(stage + 1)}
              />
            </div>
          </>
        )}
      </CardTermsModalWrapper>
    </Modal>
  );
};

export default CardTermsModal;
