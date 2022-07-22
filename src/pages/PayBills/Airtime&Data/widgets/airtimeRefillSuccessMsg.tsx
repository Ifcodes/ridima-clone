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
  handleClear = () => {},
}: {
  phoneNumber?: string;
  amount?: string;
  handleClear?: Function;
}) => {
  const showModal = airtimeDataStates.use().showAirtimeSuccessMsg;
  const selectedNetwork = airtimeDataStates.use().selectedNetwork;

  const closeModal = (val: boolean) => {
    setShowAirtimeSuccessMsg(val);
  };

  const handleBtnClick = () => {
    resetAirtimeDataState();
    handleClear();
  };

  return (
    <div>
      <PayBillSuccessMessageModal
        openModal={showModal}
        closeModal={closeModal}
        handleCloseBtn={handleBtnClick}
        icon={<img src="/vectors/SuccessMessageIconGreen2.svg" alt="" />}
        messageTitle="Airtime Refilled Successfully"
        message={`You’ve successfully refilled ${selectedNetwork} airtime of N${amount} for ${phoneNumber}`}
      />
    </div>
  );
};

export default AirtimeRefillSuccessMsg;
