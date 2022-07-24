import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import Input from "../../../components/atoms/Forms/Input";
import MiniFormCard from "../../../components/molecules/MiniFormCard";
import {
  changePinStates,
  setChangePinStage,
} from "../../../Entity/ChangePinEntities";
import { generateId } from "../../../utils/generateId";

const ResetPin = () => {
  const currentStage = changePinStates.use().stage;
  const [formField, setFormField] = useState({
    otp: "",
    newPin: "",
    confirmPin: "",
  });
  const [pinMatch, setPinMatch] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const formIsFilled = Object.values(formField).every((field) => field !== "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>, val: any) => {
    setFormField({ ...formField, [val]: e.target.value });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isPinMatch = formField.newPin === formField.confirmPin;
    if (!isPinMatch) {
      setPinMatch(false);
      setErrorMessage("New Pins do not match!");
    } else if (formField.newPin.length < 4) {
      setPinMatch(false);
      setErrorMessage("PIN is less than 4");
    } else {
      setChangePinStage(currentStage + 1);
      setFormField({
        ...formField,
        otp: "",
        newPin: "",
        confirmPin: "",
      });
    }
  };

  return (
    <MiniFormCard
      cardTitle="Reset Pin"
      cardTitleDescription="Create your new 4-digit transaction PIN. Make sure its stronger and different from the last one."
      secondaryCtaText="Resend code"
      btnText="Reset pin"
      btnIsDisabled={!formField.confirmPin}
      handleSubmit={handleFormSubmit}
    >
      <div className="mini-form-input-field">
        <Input
          id={generateId()}
          label={"Enter OTP code"}
          maxLength={6}
          minLength={6}
          placeholder="e.g 123456"
          required
          value={formField.otp}
          onChange={(e) => handleChange(e, "otp")}
        />
        <Input
          id={generateId()}
          label="New pin"
          placeholder="****"
          maxLength={4}
          minLength={4}
          required
          value={formField.newPin}
          onChange={(e) => handleChange(e, "newPin")}
          type="password"
          errorShown={pinMatch === false}
        />
        <Input
          id={generateId()}
          label="Confirm pin"
          placeholder="****"
          maxLength={4}
          minLength={4}
          required
          value={formField.confirmPin}
          onChange={(e) => handleChange(e, "confirmPin")}
          type="password"
          errorShown={pinMatch === false}
        />
        {!pinMatch && <span className="error-alert">{errorMessage}</span>}
      </div>
    </MiniFormCard>
  );
};

export default ResetPin;
