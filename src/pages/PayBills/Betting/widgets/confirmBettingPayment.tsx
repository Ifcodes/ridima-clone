import React from "react";
import styled from "styled-components";
import Button from "../../../../components/atoms/Buttons";
import { H1 } from "../../../../components/atoms/Typography";
import Modal from "../../../../components/molecules/Modal";
import {
  bettingWalletStates,
  setShowBettingPaySuccessModal,
  setShowConfirmBettingPayment,
} from "../../../../Entity/BettingWalletEntity";
import { ConfirmModalWrapper } from "../../payBillsStyles";

const ConfirmBettingPayment = ({
  customerID,
  amount,
}: {
  customerID?: string;
  amount?: string;
}) => {
  const openModal = bettingWalletStates.use().showConfirmBettingPayment;
  const bettingPlatform = bettingWalletStates.use().selectedPlatform;

  const handleConfirm = () => {
    setShowConfirmBettingPayment(false);
    setShowBettingPaySuccessModal(true);
  };

  return (
    <Modal
      showModal={openModal}
      closeModal={() => setShowConfirmBettingPayment(false)}
      cardHeight="30rem"
      mobileCardHeight="30rem"
      width="25%"
    >
      <ConfirmModalWrapper height="30rem">
        <H1>Confirm</H1>
        <div className="content">
          <span className="account-name">
            Lawal Olusola {`(${customerID})`}
          </span>
          <span className="data-bundle">{bettingPlatform}</span>
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

export default ConfirmBettingPayment;
