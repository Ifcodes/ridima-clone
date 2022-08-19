import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import Button from "../../../../components/atoms/Buttons";
import ProfilePics from "../../../../components/atoms/ProfilePics";
import Modal from "../../../../components/molecules/Modal";
import {
  changePinStates,
  setChangePinModal,
  setChangePinSuccessMsg,
  setConfirmNewPin,
  setCurrentPin,
  setNewPin,
  setNewPinMatch,
} from "../../../../Entity/ChangePinEntities";
import { ChangePinWrapper } from "../securityStyles";
import ChangePinSuccessMsg from "./changePinSuccessModal";

const ChangePinModal = () => {
  const changePinState = changePinStates.use();
  const showModal = changePinStates.use().showChangePinModal;
  const currentPin = changePinState.currentPin;
  const newPin = changePinState.newPin;
  const newPinMatch = changePinState.newPinMatch;
  const confirmNewPin = changePinState.confirmedNewPIn;
  const [pinInputed, setPinInputed] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);

  const pinInputStyle = {
    width: "4rem",
    height: "4rem",
    border: `${newPinMatch === false ? "1px solid red" : "none"}`,
    borderRadius: "100%",
    backgroundColor: "#6a5ee114",
    color: "#7165E3",
    fontWeight: "700",
    fontSize: "1.3rem",
    outline: "none",
  };

  const focusStyle = {
    border: `${newPinMatch === false ? "1px solid red" : "none"}`,
  };

  const handlePinChange = (val: string) => {
    if (currentStage === 0) {
      setCurrentPin(val);
    } else if (currentStage === 1) {
      setNewPin(val);
    } else if (currentStage === 2) {
      setConfirmNewPin(val);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (currentStage === 0) {
      if (currentPin.length === 4) {
        setPinInputed(true);
      }
    } else if (currentStage === 1) {
      if (newPin.length === 4) {
        setPinInputed(true);
      }
    } else if (currentStage === 2) {
      if (confirmNewPin.length === 4) {
        if (confirmNewPin !== newPin) {
          setNewPinMatch(false);
          setCurrentStage(1);
          setConfirmNewPin("");
          setNewPin("");
        } else {
          setNewPinMatch(true);
        }
      }
    } else {
      return;
    }
  }, [currentPin, newPin, confirmNewPin]);

  const handleProceed = () => {
    if (currentStage < 2) {
      setCurrentStage(currentStage + 1);
    } else if (currentStage === 2) {
      setChangePinModal(false);
      setChangePinSuccessMsg(true);
      setCurrentStage(0);
    } else {
      return;
    }
  };

  return (
    <Modal
      showModal={showModal}
      closeModal={() => setChangePinModal(false)}
      showCloseBtn
      width="27%"
      cardHeight="35rem"
      mobileCardHeight="35rem"
    >
      <ChangePinWrapper>
        <div className="pin-modal-content">
          <div className="profile-pics">
            <ProfilePics imgUrl={"/vectors/Avatar.svg"} />
          </div>
          <p className="modal-title">
            {currentStage === 0 && "Enter Current PIN"}
            {currentStage === 1 && "Create New PIN"}
            {currentStage === 2 && "Confirm New PIN"}
          </p>
          <OtpInput
            numInputs={4}
            onChange={handlePinChange}
            value={
              currentStage === 0
                ? currentPin
                : currentStage === 1
                ? newPin
                : confirmNewPin
            }
            separator={<span className="seperator"></span>}
            containerStyle="pin-input-cont"
            inputStyle={pinInputStyle}
            focusStyle={focusStyle}
            shouldAutoFocus={true}
            isInputNum={true}
            isInputSecure={true}
          />
          {!newPinMatch && (
            <span className="error-alert">New PINs do not match!</span>
          )}
          <Link to={"/forgot-pin"}>Forgot PIN</Link>
        </div>
        <Button
          btnText="Proceed"
          disabled={
            currentStage === 0 && currentPin.length < 4
              ? true
              : currentStage === 1 && newPin.length < 4
              ? true
              : currentStage === 2 && confirmNewPin.length < 4
              ? true
              : currentStage === 2 && newPinMatch === false
              ? true
              : false
          }
          width="100%"
          buttonBgType="modal"
          onClick={() => handleProceed()}
        />
      </ChangePinWrapper>
    </Modal>
  );
};

export default ChangePinModal;
