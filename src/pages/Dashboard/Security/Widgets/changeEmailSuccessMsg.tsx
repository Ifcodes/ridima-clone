import PayBillSuccessMessageModal from "../../../../components/molecules/PayBillSuccessMessageModal";
import {
  changeEmailState,
  resetAllchangeEmailState,
  setChangeEmailSuccess,
} from "../../../../Entity/ChangeEmailEntity";

const ChangeEmailSuccessMsg = ({ closeModal }: { closeModal?: Function }) => {
  const showModal = changeEmailState.use().showChangeEmailSuccessMsg;

  return (
    <div>
      <PayBillSuccessMessageModal
        openModal={showModal}
        handleCloseBtn={() => resetAllchangeEmailState()}
        closeModal={() => setChangeEmailSuccess(false)}
        icon={<img src="/vectors/GreenEnvelop.svg" alt="" />}
        messageTitle="Check your Email App  "
        titleWidth="100%"
        message={`We’ve sent a link to verify your new email. Your email address would be updated as soon as you confirm.`}
      />
    </div>
  );
};

export default ChangeEmailSuccessMsg;
