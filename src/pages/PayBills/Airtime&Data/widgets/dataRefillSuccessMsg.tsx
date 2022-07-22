import React, { useEffect, useState } from "react";
import PayBillSuccessMessageModal from "../../../../components/molecules/PayBillSuccessMessageModal";
import {
  airtimeDataStates,
  resetAirtimeDataState,
  setShowAirtimeSuccessMsg,
  setShowDataRefillSuccessMsg,
} from "../../../../Entity/AirtimeAndDataEntity";

const DataRefilledSuccessMsg = ({
  phoneNumber,
  amount,
  handleClear = () => {},
}: {
  phoneNumber?: string;
  amount?: string;
  handleClear?: Function;
}) => {
  const showModal = airtimeDataStates.use().showDataRefillSuccessMsg;
  const selectedNetwork = airtimeDataStates.use().selectedNetwork;

  const closeModal = (val: boolean) => {
    setShowDataRefillSuccessMsg(val);
  };

  const handleCloseBtn = () => {
    resetAirtimeDataState();
    handleClear();
  };

  return (
    <div>
      <PayBillSuccessMessageModal
        openModal={showModal}
        closeModal={closeModal}
        handleCloseBtn={() => handleCloseBtn()}
        icon={<img src="/vectors/SuccessMessageIconGreen2.svg" alt="" />}
        messageTitle="Data Refilled Successfully"
        message={`You’ve successfully refilled ${selectedNetwork} Data of N${amount} for ${phoneNumber}`}
      />
    </div>
  );
};

export default DataRefilledSuccessMsg;
