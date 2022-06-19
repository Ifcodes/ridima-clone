import PayBillSuccessMessageModal from "../../../../components/molecules/PayBillSuccessMessageModal";
import {
  sendMoneyStates,
  setSendMoneySuccessModal,
} from "../../../../Entity/WalletEntities/SendMoneyEntity";
import { withdrawToBankStates } from "../../../../Entity/WalletEntities/WithdrawToBankEntity";

const SendMoneySuccessMsg = ({ closeModal }: { closeModal: Function }) => {
  const showModal = sendMoneyStates.use().showSendMoneySuccessMsg;

  return (
    <div>
      <PayBillSuccessMessageModal
        openModal={showModal}
        handleCloseBtn={closeModal}
        closeModal={() => setSendMoneySuccessModal(false)}
        icon={<img src="/vectors/SuccessMessageIconGreen2.svg" alt="" />}
        messageTitle="Money sent Successfully"
        titleWidth="100%"
        message={`Your friend should receive the money in their wallet in less than 2mins.`}
      />
    </div>
  );
};

export default SendMoneySuccessMsg;
