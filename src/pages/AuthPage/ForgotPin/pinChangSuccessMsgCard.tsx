import React from "react";
import { useNavigate } from "react-router-dom";
import SuccessMessageIconBlue from "../../../components/atoms/vectors/SuccessMessageIconBlue";
import MessageCard from "../../../components/molecules/MessageCard";
import { setChangePinStage } from "../../../Entity/ChangePinEntities";

const SuccessMessageCard = () => {
  const navigate = useNavigate();
  return (
    <>
      <MessageCard
        closeIcon
        handleClick={() => {
          navigate("/home");
          setChangePinStage(0);
        }}
        cardIcon={<SuccessMessageIconBlue />}
        title={"Pin Reset Successful"}
        description={
          "You’ve successfully reset your PIN. Please keep your PIN known to you only."
        }
      />
    </>
  );
};

export default SuccessMessageCard;
