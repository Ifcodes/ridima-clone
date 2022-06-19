import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PayBillSuccessMessageModal from "../../../../components/molecules/PayBillSuccessMessageModal";
import {
  airtimeDataStates,
  resetAirtimeDataState,
  setShowAirtimeSuccessMsg,
} from "../../../../Entity/AirtimeAndDataEntity";
import {
  clearWithdrawalStates,
  // clearWithdrawalStates,
  setWithdrawSuccessMsgModal,
  withdrawToBankStates,
} from "../../../../Entity/WalletEntities/WithdrawToBankEntity";

const WithdrawSuccessMsg = ({
  accountName,
  amount,
  closeModal,
}: {
  accountName?: string;
  amount?: string;
  closeModal: Function;
}) => {
  const showModal = withdrawToBankStates.use().showSuccessMsgModal;
  const navigate = useNavigate();

  return (
    <div>
      <PayBillSuccessMessageModal
        openModal={showModal}
        titleWidth="100%"
        handleCloseBtn={closeModal}
        closeModal={() => setWithdrawSuccessMsgModal(false)}
        icon={<img src="/vectors/SuccessMessageIconGreen2.svg" alt="" />}
        messageTitle="Withdrawal Successful"
        message={`You have succccessfully withdrawn N${amount} to ${accountName}`}
      />
    </div>
  );
};

export default WithdrawSuccessMsg;
