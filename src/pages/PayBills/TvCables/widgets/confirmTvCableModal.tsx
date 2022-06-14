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
import {
  setShowConfirmTvCableModal,
  setShowTvCableSuccessMsgModal,
  tvCableStates,
} from "../../../../Entity/TvCablesEntity";
import { ConfirmModalWrapper } from "../../payBillsStyles";

const ConfirmTvCablePurchaseModal = ({
  deviceNumber,
  amount,
}: {
  deviceNumber?: string;
  amount?: string;
}) => {
  const openModal = tvCableStates.use().showConfirmTvCablePurchaseModal;
  const cablePlan = tvCableStates.use().selectedTvCablePlan;

  const handleConfirm = () => {
    console.log("confirmed");
    setShowConfirmTvCableModal(false);
    setShowTvCableSuccessMsgModal(true);
  };

  return (
    <Modal
      showModal={openModal}
      closeModal={() => setShowConfirmTvCableModal(false)}
      showCloseBtn
      cardHeight="65vh"
      width="25%"
    >
      <ConfirmModalWrapper>
        <H1>Confirm</H1>
        <div className="content">
          <span className="account-name">
            Lawal Olusola {`(${deviceNumber})`}
          </span>
          <span className="data-bundle">{cablePlan}</span>
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

export default ConfirmTvCablePurchaseModal;
