import React from "react";
import Button from "../../../../components/atoms/Buttons";
import { H1, Paragraph } from "../../../../components/atoms/Typography";
import Modal from "../../../../components/molecules/Modal";
import { keypadModalStates } from "../../../../Entity/KeypadModalEntity";
import {
  requestMoneyStates,
  setConfirmRequestMoneyModal,
  setRequestMoneySuccessModal,
} from "../../../../Entity/WalletEntities/RequestMoneyEntity";;
import { ConfirmModalWrapper } from "../walletStyles";

const ConfirmRequestMoneyModal = ({ userName }: { userName?: string }) => {
  const showModal = requestMoneyStates.use().showConfirmModal;
  const amount = keypadModalStates.use().amount;

  const handleBtnClick = () => {
    setConfirmRequestMoneyModal(false);
    setRequestMoneySuccessModal(true);
  };
  return (
    <Modal
      showModal={showModal}
      closeModal={() => setConfirmRequestMoneyModal(false)}
      cardHeight="65vh"
      width="28%"
    >
      <ConfirmModalWrapper>
        <div className="text-content">
          <H1>Confirm</H1>
          <Paragraph>
            You are about to send N{amount} to @{userName}. Confirm that this is
            correct by clciking on the button below.
          </Paragraph>
        </div>
        <Button
          btnText="Confirm"
          buttonBgType="modal"
          width="100%"
          onClick={() => handleBtnClick()}
        />
      </ConfirmModalWrapper>
    </Modal>
  );
};

export default ConfirmRequestMoneyModal;
