import React from "react";
import Button from "../../../../components/atoms/Buttons";
import { H1, Paragraph } from "../../../../components/atoms/Typography";
import Modal from "../../../../components/molecules/Modal";
import { keypadModalStates } from "../../../../Entity/KeypadModalEntity";
import {
  sendMoneyStates,
  setConfirmSendMoneyModal,
  setSendMoneySuccessModal,
} from "../../../../Entity/WalletEntities/SendMoneyEntity";
import { ConfirmModalWrapper } from "../walletStyles";

const ConfirmSendMoneyModal = ({ userName }: { userName?: string }) => {
  const showModal = sendMoneyStates.use().showConfirmModal;
  const amount = keypadModalStates.use().amount;
  return (
    <Modal
      showModal={showModal}
      closeModal={() => setConfirmSendMoneyModal(false)}
      cardHeight="30rem"
      mobileCardHeight="30rem"
      width="25%"
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
          onClick={() => setSendMoneySuccessModal(true)}
        />
      </ConfirmModalWrapper>
    </Modal>
  );
};

export default ConfirmSendMoneyModal;
