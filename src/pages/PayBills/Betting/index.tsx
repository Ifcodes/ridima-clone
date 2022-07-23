import React, { useState } from "react";
import BillCard from "../../../components/atoms/BillCard";
import Button from "../../../components/atoms/Buttons";
import AddMinusInput from "../../../components/atoms/Forms/AddMinusInput";
import Input from "../../../components/atoms/Forms/Input";
import Selector from "../../../components/atoms/Selector";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import BettingWalletIcon from "../../../components/atoms/vectors/BettingWalletIcon";
import {
  bettingWalletStates,
  setShowConfirmBettingPayment,
  setShowSelectPlaform,
} from "../../../Entity/BettingWalletEntity";
import { FormWrapper, SelectedBillWrapper } from "../payBillsStyles";
import BetPaySuccessModal from "./widgets/betPaySuccessModal";
import ConfirmBettingPayment from "./widgets/confirmBettingPayment";
import SelectPlatformModal from "./widgets/selectPlaformModal";

const BettingWallets = () => {
  const selectedPlatform = bettingWalletStates.use().selectedPlatform;

  const [readOnly, setReadOnly] = useState(false);

  const [formField, setFormField] = useState({
    customerId: "",
    amount: "",
  });

  const formIsFilled = Object.values(formField).every(
    (val) => val !== "" && selectedPlatform
  );

  const handleRefill = () => {
    setShowConfirmBettingPayment(true);
  };

  const handleAddMinus = (type: string) => {
    setReadOnly(true);
    const value = Number(formField.amount);
    if (type === "add") {
      setFormField({
        ...formField,
        amount: (value + 50).toLocaleString(),
      });
    }
    if (type === "minus") {
      setFormField({
        ...formField,
        amount: (value - 50).toLocaleString(),
      });
    }
  };

  const onFocus = (type: boolean) => {
    setReadOnly(type);
  };

  const clearForm = () => {
    setFormField({
      customerId: "",
      amount: "",
    });
  };

  return (
    <SelectedBillWrapper>
      <div className="billcard-cont">
        <BillCard
          isHorizontal
          isActive
          bgColor="#FBD0D0"
          title="Betting Wallets"
          icon={<BettingWalletIcon />}
        />
      </div>
      <div className="title-cont">
        <HorizontalLinedTitle text="Wallet Details" />
      </div>
      <FormWrapper>
        <div className="airtime-form">
          <div className="inputField-wrapper">
            <Selector
              selectorTitle={selectedPlatform || "Select Platform"}
              onClick={() => setShowSelectPlaform(true)}
              mt="1rem"
            />
            <Input
              placeholder="e.g 0000 0000 0000"
              label="Enter Customer ID"
              value={formField.customerId}
              maxLength={11}
              onChange={(e) =>
                setFormField({
                  ...formField,
                  customerId: e.target.value,
                })
              }
              width={"27rem"}
              mt={"1.5rem"}
            />
          </div>
          <div className="amount-cont">
            <span className="enter-amount">Enter Amount</span>
            <AddMinusInput
              inputValue={formField.amount}
              placeholder="₦0"
              symbol={formField.amount ? "₦" : ""}
              isReadOnly={readOnly}
              handleButtons={handleAddMinus}
              onChange={(e) =>
                setFormField({
                  ...formField,
                  amount: e.target.value,
                })
              }
              setFocus={onFocus}
            />
          </div>
        </div>
        <Button
          btnText="Subscribe"
          width="27rem"
          disabled={!formIsFilled}
          onClick={() => handleRefill()}
          mb="6rem"
          mt="6rem"
        />
      </FormWrapper>
      <SelectPlatformModal />
      <ConfirmBettingPayment
        amount={formField.amount}
        customerID={formField.customerId}
      />
      <BetPaySuccessModal
        amount={formField.amount}
        customerID={formField.customerId}
        handleClear={() => clearForm()}
      />
    </SelectedBillWrapper>
  );
};

export default BettingWallets;
