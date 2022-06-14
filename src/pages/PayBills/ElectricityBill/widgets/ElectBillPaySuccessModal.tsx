import React, { useEffect, useState } from "react";
import PayBillSuccessMessageModal from "../../../../components/molecules/PayBillSuccessMessageModal";
import {
  bettingWalletStates,
  setShowBettingPaySuccessModal,
} from "../../../../Entity/BettingWalletEntity";
import {
  electricityBillStates,
  setShowElectPaySuccessModal,
} from "../../../../Entity/ElectricityBillEntity";

const ElectBillPaySuccessModal = ({
  cardNumber,
  amount,
}: {
  cardNumber?: string;
  amount?: string;
}) => {
  const showModal = electricityBillStates.use().showElectrictyBillSuccessModal;
  const selectedProvider = electricityBillStates.use().selectedProvider;

  const closeModal = (val: boolean) => {
    setShowElectPaySuccessModal(val);
  };

  return (
    <div>
      <PayBillSuccessMessageModal
        openModal={showModal}
        closeModal={closeModal}
        icon={<img src="/vectors/SuccessMessageIconGreen2.svg" alt="" />}
        messageTitle="Electricity Refilled Successfully"
        message={`Your ${selectedProvider} plan for ${cardNumber} of N${amount} was successful `}
        titleWidth="24rem"
      />
    </div>
  );
};

export default ElectBillPaySuccessModal;
