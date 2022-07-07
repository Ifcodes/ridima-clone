import React from "react";
import { useNavigate } from "react-router-dom";
import { setCreatedVirtualCard } from "../../../Entity/CreatedVirtualCard";
import Button from "../../../components/atoms/Buttons";
import { Paragraph } from "../../../components/atoms/Typography";
import MessageCard from "../../../components/molecules/MessageCard";

// TODO: Remove this component
const PinVerificationSuccess = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/virtual-cards");
    setCreatedVirtualCard(true);
  };
  return (
    <>
      <div className="success-title-cont">
        <img
          src="/vectors/SuccessMessageIconGreen2.svg"
          alt=""
          className="illustration"
        />
        <h1 className="success-msg-title">Super Smoooth!</h1>
        <Paragraph>
          You’ve successfully created your virtual US Dollar card. You can start
          paying online.
        </Paragraph>
      </div>
      <div className="btn-lg">
        <Button
          buttonBgType="modal"
          btnText="Go to virtual card"
          width="100%"
          mobileWidth="100%"
          onClick={() => handleClick()}
        />
      </div>
    </>
  );
};

export default PinVerificationSuccess;
