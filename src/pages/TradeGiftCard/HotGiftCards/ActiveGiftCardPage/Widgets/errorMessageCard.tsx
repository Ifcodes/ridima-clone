import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../components/atoms/Buttons";
import { H1, Paragraph } from "../../../../../components/atoms/Typography";
import MessageCard from "../../../../../components/molecules/MessageCard";
import Modal from "../../../../../components/molecules/Modal";
import {
  hotGiftCardsStates,
  resetAllHotGiftCardState,
  setOpenTradeFailureMessage,
  setOpenTradeSuccessMessage,
} from "../../../../../Entity/HotGiftCardsEntity";
import { SuccessMessageWrapper } from "../../../styledTradeGiftCard";

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
    >
      <SuccessMessageWrapper errorMessage>
        <div className="img-cont">
          <img src="/vectors/ErrorMessageIcon.svg" alt="" />
        </div>
        <div className="text-cont">
          <H1 mt="2rem">Oh Snap!</H1>
          <Paragraph>
            Your Giftcard trade didn’t go through, please try again.
          </Paragraph>
        </div>
        <div className="btn-wrapper">
          <Button
            buttonBgType="modalSm"
            btnText="Try again"
            width="22rem"
            onClick={() => handleButtonClick()}
            mt="2rem"
          />
        </div>
      </SuccessMessageWrapper>
    </Modal>
  );
};

export default SellGcErrorMessageCard;
