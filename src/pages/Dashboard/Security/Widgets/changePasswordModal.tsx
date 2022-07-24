import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/atoms/Buttons";
import Input from "../../../../components/atoms/Forms/Input";
import { H1, Paragraph } from "../../../../components/atoms/Typography";
import Modal from "../../../../components/molecules/Modal";
import {
  changePasswordState,
  setChangePasswordModal,
  setChangePasswordSuccess,
} from "../../../../Entity/ChangePasswordEntity";
import { ChangePasswordModalWrapper } from "../securityStyles";

const ChangePasswordModal = () => {
  const showModal = changePasswordState.use().showChangePasswordModal;
  const [formField, setFormField] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const formIsFilled = Object.values(formField).every((field) => field !== "");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isPasswordMatch = formField.newPassword === formField.confirmPassword;
    if (!isPasswordMatch) {
      setPasswordMatch(false);
      setErrorMessage("New Passwords do not match!");
    } else if (formField.newPassword.length < 8) {
      setPasswordMatch(false);
      setErrorMessage("Password is less than 8 characters");
    } else {
      setChangePasswordModal(false);
      setChangePasswordSuccess(true);
      setFormField({
        ...formField,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <Modal
      showModal={showModal}
      closeModal={() => setChangePasswordModal(false)}
      showCloseBtn
      handleCloseBtn={() => setChangePasswordModal(false)}
      width="27%"
    >
      <ChangePasswordModalWrapper>
        <H1>Reset Password</H1>
        <Paragraph> Enter Your Password</Paragraph>
        <form onSubmit={handleSubmit}>
          <div className="password-input-fields">
            <Input
              value={formField.currentPassword}
              label="Enter your current password"
              placeholder="*********"
              required
              type={"password"}
              onChange={(e) =>
                setFormField({ ...formField, currentPassword: e.target.value })
              }
            />
            <Input
              value={formField.newPassword}
              label="New Password"
              placeholder="*********"
              required
              type={"password"}
              errorShown={passwordMatch === false}
              onChange={(e) =>
                setFormField({ ...formField, newPassword: e.target.value })
              }
            />
            <Input
              value={formField.confirmPassword}
              label="Confirm New Password"
              placeholder="*********"
              required
              type={"password"}
              errorShown={passwordMatch === false}
              onChange={(e) =>
                setFormField({ ...formField, confirmPassword: e.target.value })
              }
            />
            {!passwordMatch && (
              <span className="error-alert">{errorMessage}</span>
            )}
          </div>
          <div className="password-cta-cont">
            <Link to={"/forgot-password"}>Forgot Password</Link>
            <Button
              btnText="Update"
              buttonBgType="modal"
              width="100%"
              disabled={!formIsFilled}
              type="submit"
            />
          </div>
        </form>
      </ChangePasswordModalWrapper>
    </Modal>
  );
};

export default ChangePasswordModal;
