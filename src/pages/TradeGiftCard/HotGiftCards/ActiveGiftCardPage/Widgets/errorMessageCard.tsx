import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../components/atoms/Buttons";
import { H1, Paragraph } from "../../../../../components/atoms/Typography";
import Modal from "../../../../../components/molecules/Modal";
import { SuccessMessageWrapper } from "../../../../../components/molecules/SuccessMessageCard/successMsgStyles";
import {
  hotGiftCardsStates,
  resetAllHotGiftCardState,
  setOpenTradeFailureMessage,
  setOpenTradeSuccessMessage,
} from "../../../../../Entity/HotGiftCardsEntity";

const SellGcErrorMessageCard = () => {
  const navigate = useNavigate();
  const openModal = hotGiftCardsStates.use().openFailureMessage;

  const handleButtonClick = () => {
    navigate("/trade-giftcards");
    resetAllHotGiftCardState();
  };

  return (
    <Modal
      showModal={openModal}
      closeModal={() => setOpenTradeFailureMessage(false)}
      showCloseBtn
      cardHeight="85%"
      mobileCardHeight={"65%"}
    >
      <SuccessMessageWrapper errorMessage>
        <div className="msg-modal-content">
          <div className="img-cont">
            <img src="/vectors/ErrorMessageIcon.svg" alt="" />
          </div>
          <div className="msg-text-cont">
            <H1 mt="2rem">Oh Snap!</H1>
            <Paragraph>
              Your Giftcard trade didn’t go through, please try again.
            </Paragraph>
          </div>
        </div>
        <div className="btn-wrapper">
          <Button
            buttonBgType="modalSm"
            btnText="Try again"
            width="100%"
            onClick={() => handleButtonClick()}
          />
        </div>
      </SuccessMessageWrapper>
    </Modal>
  );
};

export default SellGcErrorMessageCard;
