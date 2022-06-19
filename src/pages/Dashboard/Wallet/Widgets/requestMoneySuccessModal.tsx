import PayBillSuccessMessageModal from "../../../../components/molecules/PayBillSuccessMessageModal";
import {
  requestMoneyStates,
  setRequestMoneySuccessModal,
} from "../../../../Entity/WalletEntities/RequestMoneyEntity";

const RequestMoneySuccessModal = ({ closeModal }: { closeModal: Function }) => {
  const showModal = requestMoneyStates.use().showRequestMoneySuccessMsg;

  return (
    <div>
      <PayBillSuccessMessageModal
        openModal={showModal}
        handleCloseBtn={closeModal}
        closeModal={() => setRequestMoneySuccessModal(false)}
        icon={<img src="/vectors/SuccessMessageIconGreen2.svg" alt="" />}
        messageTitle="Money Requested Successfully"
        titleWidth="100%"
        message={`Your friend should receive the money in their wallet in less than 2mins.`}
      />
    </div>
  );
};

export default RequestMoneySuccessModal;
