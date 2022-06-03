import React, { FormEventHandler, useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import ProfilePics from "../../../components/atoms/ProfilePics";
import Avatar from "../../../components/atoms/vectors/Avatar";
import { PinVerificationWrapper } from "../../../components/molecules/PinVerificationModal/styledPinVerification";

type PinVerificationProps = {
  imgUrl?: string;
  user?: string;
  handlePinInput?: Function;
  pin?: string;
};

const PinVerification = ({
  imgUrl,
  user,
  handlePinInput,
  pin,
}: PinVerificationProps) => {
  const pinInputStyle = {
    width: "4rem",
    height: "4rem",
    border: "none",
    borderRadius: "100%",
    backgroundColor: "#6a5ee114",
    color: "#7165E3",
    fontWeight: "700",
    fontSize: "1.3rem",
    outline: "none",
  };

  const focusStyle = {
    border: "none",
  };

  return (
    <PinVerificationWrapper>
      <div className="modal-title-cont">
        <div className="profile-pics">
          <ProfilePics imgUrl={imgUrl || "/vectors/Avatar.svg"} />
        </div>
        <p className="user">{user}</p>
        <OtpInput
          numInputs={4}
          onChange={handlePinInput}
          value={pin}
          separator={<span className="seperator"></span>}
          containerStyle="pin-input-cont"
          inputStyle={pinInputStyle}
          focusStyle={focusStyle}
          shouldAutoFocus={true}
          isInputNum={true}
          isInputSecure={true}
        />
      </div>
      <Link to={"/forgot-pin"}>Forgot PIN</Link>
    </PinVerificationWrapper>
  );
};

export default PinVerification;
