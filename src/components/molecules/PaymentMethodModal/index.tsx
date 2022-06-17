import React, { MouseEventHandler } from "react";
import BankTransferPayMethodCard from "../../atoms/BankTransferPayMethodCard.tsx";
import { H1 } from "../../atoms/Typography";
import UseDebitCardPayOptionCard from "../../atoms/UseDebitCardPayOptionCard";
import UseUssdCodePayOptionCard from "../../atoms/UseUssdCodePayOptionCard.tsx";
import Modal from "../Modal";
import { PayMethodWrapper } from "./paymentMethodStyles";

const PaymentMethodModal = ({
  showModal,
  closeModal,
  bankName,
  accountName,
  accountNumber,
  handleUseUssdCardClick,
  handleUseDebitCardClick,
}: {
  showModal: boolean;
  closeModal: Function;
  bankName?: string;
  accountName?: string;
  accountNumber?: string;
  handleUseUssdCardClick?: MouseEventHandler<HTMLDivElement>;
  handleUseDebitCardClick?: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <Modal
      showModal={showModal}
      closeModal={closeModal}
      cardHeight={"80vh"}
      width={"28%"}
    >
      <PayMethodWrapper>
        <H1>How would you like to fund your wallet?</H1>

        <div className="cards-wrapper">
          <BankTransferPayMethodCard
            bankName={bankName}
            accountName={accountName}
            accountNumber={accountNumber}
          />
          <div className="card-div">
            <UseUssdCodePayOptionCard onClick={handleUseUssdCardClick} />
          </div>
          <div className="card-div">
            <UseDebitCardPayOptionCard onClick={handleUseDebitCardClick} />
          </div>
        </div>
      </PayMethodWrapper>
    </Modal>
  );
};

export default PaymentMethodModal;
