import React from "react";
import { clearKeypadStates } from "../../../Entity/KeypadModalEntity";
import { setShowFundWarningModal } from "../../../Entity/WalletEntities/FundWalletEntity";
import Button from "../../atoms/Buttons";
import { H1, Paragraph } from "../../atoms/Typography";
import GroupedBankAndWarningIcon from "../../atoms/vectors/GroupedBankAndWarningIcon";
import Modal from "../Modal";
import { WarningModalWrapper } from "./warningModalStyles";

const WarningModal = ({
  showModal,
  closeModal,
}: {
  showModal: boolean;
  closeModal: Function;
}) => {
  const handleProceed = () => {
    clearKeypadStates();
    setShowFundWarningModal(false);
  };
  return (
    <Modal showModal={showModal} closeModal={closeModal} cardHeight="65%">
      <WarningModalWrapper>
        <div className="icon-text-cont">
          <GroupedBankAndWarningIcon />
          <H1>Warning!</H1>
          <Paragraph>
            Bank withdrawals might be delayed due to network issues. Please
            exercise patience.
          </Paragraph>
        </div>
        <Button
          btnText="Proceed"
          buttonBgType="modal"
          onClick={() => handleProceed()}
        />
      </WarningModalWrapper>
    </Modal>
  );
};

export default WarningModal;
