import React, { useEffect, useState } from "react";
import PayBillSuccessMessageModal from "../../../../components/molecules/PayBillSuccessMessageModal";
import {
  bettingWalletStates,
  setShowBettingPaySuccessModal,
} from "../../../../Entity/BettingWalletEntity";

const BetPaySuccessModal = ({
  customerID,
  amount,
}: {
  customerID?: string;
  amount?: string;
}) => {
  const showModal = bettingWalletStates.use().showBettingPaySuccessModal;
  const selectedPlatform = bettingWalletStates.use().selectedPlatform;

  const closeModal = (val: boolean) => {
    setShowBettingPaySuccessModal(val);
  };

  return (
    <div>
      <PayBillSuccessMessageModal
        openModal={showModal}
        closeModal={closeModal}
        icon={<img src="/vectors/SuccessMessageIconGreen2.svg" alt="" />}
        messageTitle="Betting Wallet Funded Successfully"
        message={`Your ${selectedPlatform} plan for ${customerID} of N${amount} was successful `}
        titleWidth="27rem"
      />
    </div>
  );
};

export default BetPaySuccessModal;
