import React from "react";
import { useNavigate } from "react-router-dom";
import { setCreatedVirtualCard } from "../../../Entity/CreateVirtualCardEntity/CreatedVirtualCard";
import Button from "../../../components/atoms/Buttons";
import { Paragraph } from "../../../components/atoms/Typography";
import MessageCard from "../../../components/molecules/MessageCard";
import Modal from "../../../components/molecules/Modal";
import { PinVerificationWrapper } from "../../../components/molecules/PinVerificationModal/styledPinVerification";
import {
  createVirtualCardState,
  setCreateVCardPinVerifyModal,
  setCreateVCardSuccessMsgModal,
} from "../../../Entity/CreateVirtualCardEntity";

// TODO: Remove this component
const PinVerificationSuccess = () => {
  const navigate = useNavigate();
  const showModal = createVirtualCardState.use().showSuccessMessageModal;

  const handleClick = () => {
    navigate("/virtual-cards");
    setCreatedVirtualCard(true);
  };
  return (
    <Modal
      showModal={showModal}
      closeModal={() => setCreateVCardSuccessMsgModal(false)}
      showCloseBtn
      handleCloseBtn={() => setCreateVCardSuccessMsgModal(false)}
      width={"28%"}
    >
      <PinVerificationWrapper>
        <div className="success-title-cont">
          <img
            src="/vectors/SuccessMessageIconGreen2.svg"
            alt=""
            className="illustration"
          />
          <h1 className="success-msg-title">Super Smoooth!</h1>
          <Paragraph>
            You’ve successfully created your virtual US Dollar card. You can
            start paying online.
          </Paragraph>
        </div>
        <div className="pin-verify-btn-cont">
          <Button
            buttonBgType="modal"
            btnText="Go to virtual card"
            width="100%"
            onClick={() => handleClick()}
          />
        </div>
      </PinVerificationWrapper>
    </Modal>
  );
};

export default PinVerificationSuccess;
