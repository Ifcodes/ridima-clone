import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/atoms/Buttons";
import SuccessMessageIconBlue from "../../../components/atoms/vectors/SuccessMessageIconBlue";
import MessageCard from "../../../components/molecules/MessageCard";
import { setChangePasswordStage } from "../../../Entity/ChangePasswordEntity";

const SuccessMessageCard = () => {
  const navigate = useNavigate();

  return (
    <>
      <MessageCard
        cardIcon={<SuccessMessageIconBlue />}
        title={"Password Reset Successful"}
        description={
          "You’ve successfully reset your Password. Please keep your password known to you only."
        }
        imgWidth={"80%"}
        primaryCta={
          <Button
            mt="4rem"
            btnText="Login"
            disabled={false}
            onClick={() => {
              navigate("/login");
              setChangePasswordStage(0);
            }}
          />
        }
      />
    </>
  );
};

export default SuccessMessageCard;
