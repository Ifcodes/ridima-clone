import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/atoms/Buttons";
import { H1, Paragraph } from "../../../../components/atoms/Typography";
import Modal from "../../../../components/molecules/Modal";
import {
  checkRatesStates,
  setCheckRatesModal,
  setCurrentCheckRateStage,
} from "../../../../Entity/CheckRatesEntity";
import { CheckRatesModalWrapper } from "../checkRatesStyles";

const CheckRatesModal = () => {
  const showModal = checkRatesStates.use().showCheckRateModal;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/trade-giftcards/check-rates");
    setCheckRatesModal(false);
    setCurrentCheckRateStage("reset");
  };
  return (
    <Modal
      showModal={showModal}
      closeModal={() => setCheckRatesModal(false)}
      cardHeight="40rem"
      mobileCardHeight="30rem"
    >
      <CheckRatesModalWrapper>
        <div className="content">
          <H1>Check Rates</H1>
          <Paragraph>
            Find out the current rate of different gift cards in Naira using our
            AI Questionnaire.
          </Paragraph>
          <div className="img-cont">
            <img src="/vectors/GiftCardsIllustration.svg" alt="" />
          </div>
        </div>
        <div className="check-rate-modal-cta">
          <Button
            width="100%"
            btnText="Begin!"
            buttonBgType="modal"
            mt="0"
            onClick={() => handleClick()}
          />
        </div>
      </CheckRatesModalWrapper>
    </Modal>
  );
};

export default CheckRatesModal;
