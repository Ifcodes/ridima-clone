import React, { useEffect, useState } from "react";
import PayBillSuccessMessageModal from "../../../../components/molecules/PayBillSuccessMessageModal";
import {
  resetTvCableEntity,
  setShowTvCableSuccessMsgModal,
  tvCableStates,
} from "../../../../Entity/TvCablesEntity";

const TvCableSuccessMsgModal = ({
  deviceNumber,
  amount,
  handleClear = () => {},
}: {
  deviceNumber?: string;
  amount?: string;
  handleClear?: Function;
}) => {
  const showModal = tvCableStates.use().showTvCableSuccessModal;
  const selectedPlan = tvCableStates.use().selectedTvCablePlan;

  const closeModal = (val: boolean) => {
    setShowTvCableSuccessMsgModal(val);
  };

  const handleCloseBtn = () => {
    resetTvCableEntity();
    handleClear();
  };

  return (
    <div>
      <PayBillSuccessMessageModal
        openModal={showModal}
        closeModal={closeModal}
        handleCloseBtn={() => handleCloseBtn()}
        icon={<img src="/vectors/SuccessMessageIconGreen2.svg" alt="" />}
        messageTitle="TV Cable Subscription Successful"
        message={`Your ${selectedPlan} plan for ${deviceNumber} of N${amount} was successful `}
        titleWidth="27rem"
      />
    </div>
  );
};

export default TvCableSuccessMsgModal;
