import React from "react";
import styled from "styled-components";
import Button from "../../../../components/atoms/Buttons";
import { H1 } from "../../../../components/atoms/Typography";
import Modal from "../../../../components/molecules/Modal";

import {
  electricityBillStates,
  setShowConfirmElectricityPayModal,
  setShowElectPaySuccessModal,
} from "../../../../Entity/ElectricityBillEntity";
import { ConfirmModalWrapper } from "../../payBillsStyles";

const ConfirmElectricityBillModal = ({
  cardNumber,
  amount,
}: {
  cardNumber?: string;
  amount?: string;
}) => {
  const openModal = electricityBillStates.use().showConfirmPaymentModal;
  const serviceProvider = electricityBillStates.use().selectedProvider;

  const handleConfirm = () => {
    setShowConfirmElectricityPayModal(false);
    setShowElectPaySuccessModal(true);
  };

  return (
    <Modal
      showModal={openModal}
      closeModal={() => setShowConfirmElectricityPayModal(false)}
      showCloseBtn
      cardHeight="65vh"
      width="25%"
    >
      <ConfirmModalWrapper>
        <H1>Confirm</H1>
        <div className="content">
          <span className="account-name">
            Lawal Olusola {`(${cardNumber})`}
          </span>
          <span className="data-bundle">{serviceProvider}</span>
          <H1 className="amount">₦{amount}</H1>
          <span className="fee">+ ₦100 Transaction fee</span>
        </div>
        <Button
          btnText="Confirm"
          buttonBgType="modal"
          width="100%"
          onClick={() => handleConfirm()}
          mt="6.5rem"
        />
      </ConfirmModalWrapper>
    </Modal>
  );
};

export default ConfirmElectricityBillModal;
