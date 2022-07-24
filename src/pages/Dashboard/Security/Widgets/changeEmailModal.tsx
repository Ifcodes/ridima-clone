import React, { FormEvent, useState } from "react";
import Button from "../../../../components/atoms/Buttons";
import Input from "../../../../components/atoms/Forms/Input";
import { H1, Paragraph } from "../../../../components/atoms/Typography";
import Modal from "../../../../components/molecules/Modal";
import {
  changeEmailState,
  setChangeEmailModal,
  setChangeEmailSuccess,
} from "../../../../Entity/ChangeEmailEntity";
import { ChangePasswordModalWrapper } from "../securityStyles";

const ChangeEmailModal = () => {
  const showModal = changeEmailState.use().showChangeEmailModal;
  const [formField, setFormField] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChangeEmailModal(false);
    setChangeEmailSuccess(true);
    setFormField("");
  };

  return (
    <Modal
      showModal={showModal}
      closeModal={() => setChangeEmailModal(false)}
      showCloseBtn
      handleCloseBtn={() => setChangeEmailModal(false)}
      width="27%"
      cardHeight={"55%"}
      mobileCardHeight="45%"
    >
      <ChangePasswordModalWrapper>
        <H1>Change Email Address</H1>
        <Paragraph> Enter Your New Email Password</Paragraph>
        <form onSubmit={handleSubmit}>
          <Input
            value={formField}
            label="New Email Address"
            placeholder="e.g you@email.com"
            type={"email"}
            required
            onChange={(e) => setFormField(e.target.value)}
          />

          <Button
            btnText="Update"
            buttonBgType="modal"
            width="100%"
            disabled={!formField}
            type="submit"
          />
        </form>
      </ChangePasswordModalWrapper>
    </Modal>
  );
};

export default ChangeEmailModal;
