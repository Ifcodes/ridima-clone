import React from "react";
import { useNavigate } from "react-router-dom";
import SuccessMessageIconBlue from "../../../components/atoms/vectors/SuccessMessageIconBlue";
import MessageCard from "../../../components/molecules/MessageCard";

const CreateAccountSuccess = () => {
  const navigate = useNavigate();
  return (
    <>
      <MessageCard
        cardIcon={<SuccessMessageIconBlue />}
        title="Greaat to have you! Hope you brought Pizza 🍕"
        closeIcon={true}
        handleClick={() => navigate("/login")}
        imgWidth="80%"
        svgWidth="100%"
      />
    </>
  );
};

export default CreateAccountSuccess;
