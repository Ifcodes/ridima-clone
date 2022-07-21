import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../components/atoms/Buttons";
import { Paragraph } from "../../../../../components/atoms/Typography";

import Modal from "../../../../../components/molecules/Modal";
import {
  hotGiftCardsStates,
  resetAllHotGiftCardState,
  setOpenTradeFailureMessage,
  setOpenTradeSuccessMessage,
} from "../../../../../Entity/HotGiftCardsEntity";
import { SuccessMessageWrapper } from "../../../styledTradeGiftCard";

const SellGcSuccessMessageCard = () => {
  const navigate = useNavigate();
  const openModal = hotGiftCardsStates.use().openSuccessMessage;

  const handleButtonClick = (type: string) => {
    resetAllHotGiftCardState();
    if (type === "another-trade") {
      navigate("/trade-giftcards");
    }
    if (type === "view-transaction") {
      navigate("/activities");
    }
    return;
  };

  return (
    <Modal
      showModal={openModal}
      closeModal={() => setOpenTradeSuccessMessage(false)}
      showCloseBtn
      cardHeight="90%"
      mobileCardHeight="85%"
    >
      <SuccessMessageWrapper>
        <div className="msg-modal-content">
          <div className="img-cont">
            <img
              src="/vectors/SuccessMessageIconGreen2.svg"
              alt=""
              className={"illustration"}
            />
          </div>
          <div className="msg-text-cont">
            <h1>Super Smoooth!</h1>
            <Paragraph>
              We’ve received your Giftcard trade and it is currently being
              processed. We’ll notify you of your transaction status soon.
            </Paragraph>
          </div>
        </div>
        <div className="btn-wrapper">
          <Button
            buttonBgType="modalSm"
            btnText="Make another trade"
            width="100%"
            onClick={() => handleButtonClick("another-trade")}
          />
          <Button
            bgColor="white"
            lineColor="#F5CF48"
            buttonBgType="reversedModal"
            btnText="See Transaction Status"
            onClick={() => handleButtonClick("view-transactions")}
            width="100%"
            mt="0"
          />
        </div>
      </SuccessMessageWrapper>
    </Modal>
  );
};

export default SellGcSuccessMessageCard;
