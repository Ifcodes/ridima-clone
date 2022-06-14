import React, { useEffect, useState } from "react";
import PayBillSuccessMessageModal from "../../../../components/molecules/PayBillSuccessMessageModal";
import {
  airtimeDataStates,
  resetAirtimeDataState,
  setShowAirtimeSuccessMsg,
  setShowDataRefillSuccessMsg,
} from "../../../../Entity/AirtimeAndDataEntity";
import {
  internetWifiStates,
  setShowWifiSuccessMsgModal,
} from "../../../../Entity/InteretAndWifiEntity";

const InternetWifiSuccessMsgModal = ({
  deviceNumber,
  amount,
}: {
  deviceNumber?: string;
  amount?: string;
}) => {
  const showModal = internetWifiStates.use().showInternetWifiSuccessModal;
  const selectedPlan = internetWifiStates.use().selectedInternetPlan;

  const closeModal = (val: boolean) => {
    setShowWifiSuccessMsgModal(val);
  };

  return (
    <div>
      <PayBillSuccessMessageModal
        openModal={showModal}
        closeModal={closeModal}
        icon={<img src="/vectors/SuccessMessageIconGreen2.svg" alt="" />}
        messageTitle="Internet Subscription Successfully"
        message={`Your ${selectedPlan} plan for ${deviceNumber} of N${amount} was successful `}
        titleWidth="27rem"
      />
    </div>
  );
};

export default InternetWifiSuccessMsgModal;
