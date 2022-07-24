import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/atoms/Forms/Input";
import MiniFormCard from "../../../components/molecules/MiniFormCard";
import AuthLayout from "../../../components/templates/AuthLayout";
import {
  changePasswordState,
  setChangePasswordStage,
} from "../../../Entity/ChangePasswordEntity";
import { generateId } from "../../../utils/generateId";
import ResetPassword from "./resetPassword";
import SuccessMessageCard from "./successMessageCard";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const currentStage = changePasswordState.use().stage;
  const [emailField, setEmailField] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChangePasswordStage(currentStage + 1);
  };

  return (
    <AuthLayout
      light={true}
      secondaryAuth={true}
      forPasswordReset={true}
      showLogo={true}
      showCloseIcon={currentStage === 2}
      handleCloseIcon={() => navigate("/login")}
    >
      {currentStage === 1 ? (
        <ResetPassword />
      ) : currentStage === 2 ? (
        <SuccessMessageCard />
      ) : (
        <MiniFormCard
          cardTitle="Forgot Password"
          cardTitleDescription="Enter your registered email. If we find your email in our system, you would receive a password reset code."
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

export default ForgotPassword;
