import React from "react";
import styled from "styled-components";
import Button from "../../../../components/atoms/Buttons";
import { H1 } from "../../../../components/atoms/Typography";
import Modal from "../../../../components/molecules/Modal";
import {
  internetWifiStates,
  setShowConfirmWifiPurchaseModal,
  setShowWifiSuccessMsgModal,
} from "../../../../Entity/InteretAndWifiEntity";
import { ConfirmModalWrapper } from "../../payBillsStyles";

const ConfirmInternetPurchaseModal = ({
  deviceNumber,
  amount,
}: {
  deviceNumber?: string;
  amount?: string;
}) => {
  const openModal = internetWifiStates.use().showConfirmWifiPurchaseModal;
  const dataPlan = internetWifiStates.use().selectedInternetPlan;

  const handleConfirm = () => {
    console.log("confirmed");
    setShowConfirmWifiPurchaseModal(false);
    setShowWifiSuccessMsgModal(true);
  };

  return (
    <Modal
      showModal={openModal}
      closeModal={() => setShowConfirmWifiPurchaseModal(false)}
      cardHeight="30rem"
      mobileCardHeight="30rem"
      width="25%"
    >
      <ConfirmModalWrapper height="30rem">
        <H1>Confirm</H1>
        <div className="content">
          <span className="account-name">
            Lawal Olusola {`(${deviceNumber})`}
          </span>
          <span className="data-bundle">{dataPlan}</span>
          <H1 className="amount">₦{amount}</H1>
          <span className="fee">+ ₦100 Transaction fee</span>
        </div>
        <Button
          btnText="Confirm"
          buttonBgType="modal"
          width="100%"
          onClick={() => handleConfirm()}
        />
      </ConfirmModalWrapper>
    </Modal>
  );
};

export default ConfirmInternetPurchaseModal;
