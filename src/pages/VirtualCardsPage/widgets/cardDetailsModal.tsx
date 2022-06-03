import React, { useState } from "react";
import { H1 } from "../../../components/atoms/Typography";
import CopyIcon from "../../../components/atoms/vectors/CopyIcon";
import Modal from "../../../components/molecules/Modal";
import { selectedVirtualCardData } from "../../../Entity/SelectedVirtualCardData";
import { CardDetailsModalWrapper } from "../styledVirtualCards";
// import {CopyToClipboard} from 'react-copy-to-clipboard';

const DetailContainer = ({
  itemLabel,
  content,
}: {
  itemLabel?: string;
  content?: string | number;
}) => {
  return (
    <div className="card-cont">
      <div className="label-cont">
        <span className="label">{itemLabel}</span>
        <span className="content">{content}</span>
      </div>
      <button>
        <CopyIcon />
        <span>copy</span>
      </button>
    </div>
  );
};

const CardDetailsModal = ({
  showModal,
  closeModal,
}: {
  showModal: boolean;
  closeModal: Function;
}) => {
  const selectedCardData = selectedVirtualCardData.use();

  const cardDetails = [
    {
      cardlabel: "Card Name",
      content: selectedCardData.cardOwnerName.toUpperCase(),
    },
    {
      cardlabel: "Card Number",
      content: selectedCardData.cardNumber,
    },
    {
      cardlabel: "CVV",
      content: selectedCardData.cvv,
    },
    {
      cardlabel: "Expiry Date",
      content: selectedCardData.cardExpiry,
    },
    {
      cardlabel: "Billing Address",
      content: selectedCardData.billingAddress,
    },
    {
      cardlabel: "Zip Code",
      content: selectedCardData.zipCode,
    },
  ];

  return (
    <Modal
      width="30%"
      cardHeight="95vh"
      showModal={showModal}
      showCloseBtn
      closeModal={closeModal}
    >
      <CardDetailsModalWrapper>
        <>
          <H1>Card Details</H1>
          {cardDetails.map((detail) => (
            <DetailContainer
              key={detail.cardlabel}
              itemLabel={detail.cardlabel}
              content={detail.content}
            />
          ))}
        </>
      </CardDetailsModalWrapper>
    </Modal>
  );
};

export default CardDetailsModal;
