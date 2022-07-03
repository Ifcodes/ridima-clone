import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlternativeAuth from "../../../components/atoms/AlternativeAuth";
import Button from "../../../components/atoms/Buttons";
import Input from "../../../components/atoms/Forms/Input";
import { H1, Paragraph } from "../../../components/atoms/Typography";
import AuthLayout from "../../../components/templates/AuthLayout";
import { generateId } from "../../../utils/generateId";
import { CreateAccountFormWrapper } from "./createAccountStyles";
import CreateAccountSuccess from "./createAccountSuccess";
import VerifyOtp from "./verifyOtp";

const CreateAccountPage = () => {
  const [disableButton, setDisableButton] = useState(true);
  const [currentStage, setCurrentStage] = useState(0);
  const navigate = useNavigate();
  const [formField, setFormField] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleChange = (val: string, e: ChangeEvent<HTMLInputElement>) => {
    const fieldsCheck = Object.values(formField).every(
      (val) => val.trim() !== ""
    );
    if (fieldsCheck) setDisableButton(false);
    else setDisableButton(true);

    setFormField({ ...formField, [val]: e.target.value });
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault;

    setCurrentStage(currentStage + 1);
  };
  return (
    <AuthLayout secondaryAuth={currentStage > 0}>
      {currentStage === 1 ? (
        <VerifyOtp
          handleSubmit={(e) => submit(e)}
          handleClick={() => setCurrentStage(currentStage + 1)}
        />
      ) : currentStage === 2 ? (
        <CreateAccountSuccess />
      ) : (
        <CreateAccountFormWrapper onSubmit={submit}>
          <div className="input-fields">
            <H1 mt="0"> Create Account</H1>
            <Input
              id={generateId()}
              label="Username"
              placeholder="e.g. Johndoe"
              required
              value={formField.username}
              onChange={(e) => handleChange("username", e)}
            />
            <Input
              id={generateId()}
              label="Phone number"
              placeholder="e.g. 080 0000 0000"
              required
              value={formField.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e)}
            />
            <Input
              id={generateId()}
              label="Email address"
              placeholder="e.g. you@email.com"
              required
              value={formField.email}
              onChange={(e) => handleChange("email", e)}
              type="email"
            />
            <Input
              id={generateId()}
              label="Password"
              placeholder="*******"
              required
              value={formField.password}
              onChange={(e) => handleChange("password", e)}
              type="password"
            />
            <p className="password-hint">
              Password should be minimum of 8 Characters
            </p>
          </div>
          <div className="btn-cont">
            <Button
              btnText="Create Account"
              disabled={disableButton}
              mt="2.5rem"
              btnType="submit"
            />
            <div className="alternative-nav-cont">
              <AlternativeAuth
                text="Already have an account?"
                cta="Login"
                location="/login"
              />
            </div>
          </div>
        </CreateAccountFormWrapper>
      )}
    </AuthLayout>
  );
};

export default CreateAccountPage;
