import React, { useEffect, useState } from "react";
import PayBillSuccessMessageModal from "../../../../components/molecules/PayBillSuccessMessageModal";
import {
  setShowTvCableSuccessMsgModal,
  tvCableStates,
} from "../../../../Entity/TvCablesEntity";

const TvCableSuccessMsgModal = ({
  deviceNumber,
  amount,
}: {
  deviceNumber?: string;
  amount?: string;
}) => {
  const showModal = tvCableStates.use().showTvCableSuccessModal;
  const selectedPlan = tvCableStates.use().selectedTvCablePlan;

  const closeModal = (val: boolean) => {
    setShowTvCableSuccessMsgModal(val);
  };

  return (
    <div>
      <PayBillSuccessMessageModal
        openModal={showModal}
        closeModal={closeModal}
        icon={<img src="/vectors/SuccessMessageIconGreen2.svg" alt="" />}
        messageTitle="TV Cable Subscription Successful"
        message={`Your ${selectedPlan} plan for ${deviceNumber} of N${amount} was successful `}
        titleWidth="27rem"
      />
    </div>
  );
};

export default TvCableSuccessMsgModal;
