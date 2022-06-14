import React, { useEffect, useState } from "react";
import PayBillSuccessMessageModal from "../../../../components/molecules/PayBillSuccessMessageModal";
import {
  airtimeDataStates,
  resetAirtimeDataState,
  setShowAirtimeSuccessMsg,
} from "../../../../Entity/AirtimeAndDataEntity";

const AirtimeRefillSuccessMsg = ({
  phoneNumber,
  amount,
}: {
  phoneNumber?: string;
  amount?: string;
}) => {
  const showModal = airtimeDataStates.use().showAirtimeSuccessMsg;
  const selectedNetwork = airtimeDataStates.use().selectedNetwork;

  const closeModal = (val: boolean) => {
    setShowAirtimeSuccessMsg(val);
  };

  return (
    <div>
      <PayBillSuccessMessageModal
        openModal={showModal}
        closeModal={closeModal}
        icon={<img src="/vectors/SuccessMessageIconGreen2.svg" alt="" />}
        messageTitle="Airtime Refilled Successfully"
        message={`You’ve successfully refilled ${selectedNetwork} airtime of N${amount} for ${phoneNumber}`}
      />
    </div>
  );
};

export default AirtimeRefillSuccessMsg;
