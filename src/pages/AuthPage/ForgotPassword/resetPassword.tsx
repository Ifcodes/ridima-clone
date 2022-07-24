import React, {
  ChangeEvent,
  KeyboardEvent,
  Dispatch,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import Input from "../../../components/atoms/Forms/Input";
import MiniFormCard from "../../../components/molecules/MiniFormCard";
import {
  changePasswordState,
  setChangePasswordStage,
} from "../../../Entity/ChangePasswordEntity";
import { generateId } from "../../../utils/generateId";

const ResetPassword = () => {
  const currentStage = changePasswordState.use().stage;
  const [formField, setFormField] = useState({
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const formIsFilled = Object.values(formField).every((field) => field !== "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>, val: any) => {
    setFormField({ ...formField, [val]: e.target.value });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isPasswordMatch = formField.newPassword === formField.confirmPassword;
    if (!isPasswordMatch) {
      setPasswordMatch(false);
      setErrorMessage("New Passwords do not match!");
    } else if (formField.newPassword.length < 8) {
      setPasswordMatch(false);
      setErrorMessage("Password is less than 8 characters");
    } else {
      setChangePasswordStage(currentStage + 1);
      setFormField({
        ...formField,
        otp: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <MiniFormCard
      cardTitle="Reset Password"
      cardTitleDescription="Create your new password. Make sure its sstronger and different from the last one."
      secondaryCtaText="Resend code"
      btnText="Reset password"
      btnIsDisabled={!formIsFilled}
      handleSubmit={handleFormSubmit}
    >
      <div className="mini-form-input-field">
        <Input
          id={generateId()}
          label={"Enter OTP code"}
          placeholder="e.g 123456"
          required
          maxLength={6}
          minLength={6}
          value={formField.otp}
          onChange={(e) => handleChange(e, "otp")}
        />
        <Input
          id={generateId()}
          label="New password"
          placeholder="********"
          required
          // minLength={8}
          value={formField.newPassword}
          onChange={(e) => handleChange(e, "newPassword")}
          type="password"
          errorShown={passwordMatch === false}
        />
        <Input
          id={generateId()}
          label="Confirm password"
          placeholder="********"
          required
          // minLength={8}
          value={formField.confirmPassword}
          onChange={(e) => handleChange(e, "confirmPassword")}
          type="password"
          errorShown={passwordMatch === false}
        />
        {!passwordMatch && <span className="error-alert">{errorMessage}</span>}
      </div>
    </MiniFormCard>
  );
};

export default ResetPassword;
