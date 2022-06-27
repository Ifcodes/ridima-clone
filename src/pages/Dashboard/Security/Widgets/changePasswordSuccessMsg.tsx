import PayBillSuccessMessageModal from "../../../../components/molecules/PayBillSuccessMessageModal";
import {
  changePasswordState,
  resetAllChangePasswordState,
  setChangePasswordSuccess,
} from "../../../../Entity/ChangePasswordEntity";

const ChangePasswordSuccessMsg = ({
  closeModal,
}: {
  closeModal?: Function;
}) => {
  const showModal = changePasswordState.use().showChangePasswordSuccessMsg;

  return (
    <div>
      <PayBillSuccessMessageModal
        openModal={showModal}
        handleCloseBtn={() => resetAllChangePasswordState()}
        closeModal={() => setChangePasswordSuccess(false)}
        icon={<img src="/vectors/SuccessMessageIconGreen2.svg" alt="" />}
        messageTitle="Password Changed Successfully  "
        titleWidth="80%"
        message={`Now we know only you can call the shots.`}
      />
    </div>
  );
};

export default ChangePasswordSuccessMsg;
