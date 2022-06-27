import PayBillSuccessMessageModal from "../../../../components/molecules/PayBillSuccessMessageModal";
import {
  changePinStates,
  resetAllChangePinState,
  setChangePinSuccessMsg,
} from "../../../../Entity/ChangePinEntities";
import {
  sendMoneyStates,
  setSendMoneySuccessModal,
} from "../../../../Entity/WalletEntities/SendMoneyEntity";
import { withdrawToBankStates } from "../../../../Entity/WalletEntities/WithdrawToBankEntity";

const ChangePinSuccessMsg = ({ closeModal }: { closeModal?: Function }) => {
  const showModal = changePinStates.use().showChangePinSuccessMsg;

  return (
    <div>
      <PayBillSuccessMessageModal
        openModal={showModal}
        handleCloseBtn={closeModal}
        closeModal={() => setChangePinSuccessMsg(false)}
        icon={<img src="/vectors/SuccessMessageIconGreen2.svg" alt="" />}
        messageTitle="PIN Changed Successfully "
        titleWidth="100%"
        message={`Now you can start trading like a Boss. Proceed to add your bank account.`}
      />
    </div>
  );
};

export default ChangePinSuccessMsg;
