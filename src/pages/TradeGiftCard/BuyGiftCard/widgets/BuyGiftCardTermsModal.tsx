import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/atoms/Buttons";
import { H1 } from "../../../../components/atoms/Typography";
import Modal from "../../../../components/molecules/Modal";
import { setShowBuyCardTermsModal } from "../../../../Entity/BuyGiftCardsEntity";
import { setActiveTabChange } from "../../../../Entity/TradeGiftCardsTabs";
import { BuyGiftCardTermsModalWrapper } from "../buyGiftCardStyles";

const termsList = [
  "Keep in mind that Gift cards are only for purchasing of goods, subscriptions on various brand platforms and other services.",
  "Before delivery of any Giftcard, it is verified 100% as a good code at the time of purchase",
  "Ensure to properly check what you have selected for order before proceeding with the order as there will be no refund once the code has been delivered and the order has been confirmed.",
  "The delivery of the Giftcard will be in form of an Ecode which you will get within a few minutes. A notification will be sent to you once the delivery is completed.",
  "We only accept payments with the Naira wallet only.",
  " If you need assistance or guidance on how to redeem your purchased giftcard, contact and reach out to us.",
];

const BuyGiftCardTermsModal = ({
  openModal,
  closeModal = () => {},
}: {
  openModal: boolean;
  closeModal?: Function;
}) => {
  const navigate = useNavigate();

  const proceed = () => {
    navigate("/trade-giftcards/buy-giftcards");
    setActiveTabChange("next");
    setShowBuyCardTermsModal(false);
  };
  return (
    <Modal
      showModal={openModal}
      closeModal={closeModal}
      showCloseBtn
      width="27%"
    >
      <BuyGiftCardTermsModalWrapper>
        <H1>Terms and Conditions:</H1>
        <ol>
          {termsList.map((term, index) => (
            <li key={term}>{term}</li>
          ))}
        </ol>
        <div className="btn-cont">
          <Button
            width="100%"
            btnText="Proceed"
            buttonBgType="modal"
            onClick={() => proceed()}
          />
        </div>
      </BuyGiftCardTermsModalWrapper>
    </Modal>
  );
};

export default BuyGiftCardTermsModal;
