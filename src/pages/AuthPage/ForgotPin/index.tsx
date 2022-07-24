import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "../../../components/atoms/Forms/Input";
import MiniFormCard from "../../../components/molecules/MiniFormCard";
import AuthLayout from "../../../components/templates/AuthLayout";
import { generateId } from "../../../utils/generateId";
import ResetPin from "./resetPin";
import SuccessMessageCard from "./pinChangSuccessMsgCard";
import {
  changePinStates,
  setChangePinStage,
} from "../../../Entity/ChangePinEntities";
import { useNavigate } from "react-router-dom";

const ForgotPin = () => {
  const navigate = useNavigate();
  const currentStage = changePinStates.use().stage;
  const [emailField, setEmailField] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChangePinStage(currentStage + 1);
  };

  return (
    <AuthLayout
      light={true}
      secondaryAuth={true}
      forPasswordReset={true}
      showLogo={true}
      showCloseIcon={currentStage === 2}
      handleCloseIcon={() => navigate("/home")}
    >
      {currentStage === 1 ? (
        <ResetPin />
      ) : currentStage === 2 ? (
        <SuccessMessageCard />
      ) : (
        <MiniFormCard
          cardTitle="Forgot Pin"
          cardTitleDescription="Enter your registered email. If we find your email in our system, you would receive a PIN reset code."
          btnText="Send code"
          btnIsDisabled={!emailField}
          handleSubmit={(e) => handleSubmit(e)}
        >
          <Input
            id={generateId()}
            label="Email address"
            placeholder="e.g you@email.com"
            type="email"
            required
            value={emailField}
            onChange={(e) => setEmailField(e.target.value)}
          />
        </MiniFormCard>
      )}
    </AuthLayout>
  );
};

export default ForgotPin;
