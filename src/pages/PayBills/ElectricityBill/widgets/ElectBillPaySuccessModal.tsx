import React, { useEffect, useState } from "react";
import PayBillSuccessMessageModal from "../../../../components/molecules/PayBillSuccessMessageModal";
import {
  electricityBillStates,
  resetElectricityState,
  setShowElectPaySuccessModal,
} from "../../../../Entity/ElectricityBillEntity";

const ElectBillPaySuccessModal = ({
  cardNumber,
  amount,
  handleClear = () => {},
}: {
  cardNumber?: string;
  amount?: string;
  handleClear?: Function;
}) => {
  const showModal = electricityBillStates.use().showElectrictyBillSuccessModal;
  const selectedProvider = electricityBillStates.use().selectedProvider;

  const closeModal = (val: boolean) => {
    setShowElectPaySuccessModal(val);
  };

  const handleCloseBtn = () => {
    resetElectricityState();
    handleClear();
  };

  return (
    <div>
      <PayBillSuccessMessageModal
        openModal={showModal}
        closeModal={closeModal}
        handleCloseBtn={() => handleCloseBtn()}
        icon={<img src="/vectors/SuccessMessageIconGreen2.svg" alt="" />}
        messageTitle="Electricity Refilled Successfully"
        message={`Your ${selectedProvider} plan for ${cardNumber} of N${amount} was successful `}
        titleWidth="24rem"
      />
    </div>
  );
};

export default ElectBillPaySuccessModal;
