import React, { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Buttons";
import { Paragraph } from "../../atoms/Typography";

const PinVerificationSuccess = ({
  messageTitle,
  message,
  btnText,
  onClick,
}: {
  messageTitle?: string;
  message?: string;
  btnText?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <div className="success-title-cont">
        <img
          src="/vectors/SuccessMessageIconGreen2.svg"
          alt=""
          className="illustration"
        />
        <h1 className="success-msg-title">{messageTitle}</h1>
        <Paragraph>{message}</Paragraph>
      </div>
      <div className="pin-verify-btn-cont">
        <Button
          buttonBgType="modal"
          btnText={btnText}
          width="100%"
          onClick={onClick}
        />
      </div>
    </>
  );
};

export default PinVerificationSuccess;
