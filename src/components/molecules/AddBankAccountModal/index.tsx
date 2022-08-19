import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "../../atoms/Buttons";
import Input from "../../atoms/Forms/Input";
import Selector from "../../atoms/Selector";
import { H1, Paragraph } from "../../atoms/Typography";
import Modal from "../Modal";
import {
  selectBankStates,
  setShowSelectBankModal,
} from "../SelectBankModal/selectBankEntity";
import { AddBankAccountWrapper } from "./addAccountStyles";
import {
  addAccountStates,
  setAddAccountModal,
  setAddAccountName,
  setAddAccountNumber,
  setWithdrawAccountVerified,
} from "./addBankAccountEntity";

const AddBankAccountModal = ({
  handleBtnClick = () => {},
}: {
  handleBtnClick?: Function;
}) => {
  const showModal = addAccountStates.use().showAddAccountModal;
  const formField = addAccountStates.use().formField;
  const accountVerified = addAccountStates.use().accountVerified;

  const formIsFilled =
    accountVerified && Object.values(formField).every((value) => value !== "");

  const handleSelectorClick = () => {
    setAddAccountModal(false);
    setShowSelectBankModal(true);
  };

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddAccountNumber(e.target.value);
  };

  useEffect(() => {
    if (formField.accountNumber.length === 10) {
      setWithdrawAccountVerified(true);
      setAddAccountName("Omotoyosi Adekunle Lawal");
    }
  }, [formField.accountNumber]);

  return (
    <Modal
      showModal={showModal}
      closeModal={() => setAddAccountModal(false)}
      width="25%"
      cardHeight="30rem"
      mobileCardHeight="30rem"
    >
      <AddBankAccountWrapper>
        <div className="text-form-content">
          <div className="title-cont">
            <H1>Add Bank Account</H1>
            <Paragraph>
              This would be added to your list of bank accounts to process
              withdrawals
            </Paragraph>
          </div>
          <div className="form-cont">
            <Selector
              width="100%"
              selectorTitle={formField.bankName || "Select Bank"}
              titleIsActive={false}
              onClick={() => handleSelectorClick()}
            />
            <Input
              label="Account number"
              maxLength={10}
              value={formField.accountNumber}
              placeholder="e.g 0000 0000 0000"
              required
              onChange={handleFormChange}
              showCheckIcon={accountVerified}
            />
            {accountVerified && (
              <Paragraph className="account-name">
                {formField.accountName.toUpperCase()}
              </Paragraph>
            )}
          </div>
        </div>
        <Button
          buttonBgType="modal"
          btnText="Proceed"
          width="100%"
          disabled={!formIsFilled}
          onClick={() => handleBtnClick()}
        />
      </AddBankAccountWrapper>
    </Modal>
  );
};

export default AddBankAccountModal;
