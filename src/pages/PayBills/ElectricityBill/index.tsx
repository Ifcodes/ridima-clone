import React, { useState } from "react";
import BillCard from "../../../components/atoms/BillCard";
import Button from "../../../components/atoms/Buttons";
import AddMinusInput from "../../../components/atoms/Forms/AddMinusInput";
import Input from "../../../components/atoms/Forms/Input";
import Selector from "../../../components/atoms/Selector";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import ElectrictyOutlineIcon from "../../../components/atoms/vectors/ElectrcityOulineIcon";
import {
  electricityBillStates,
  setShowConfirmElectricityPayModal,
  setShowSelectProvider,
} from "../../../Entity/ElectricityBillEntity";
import { FormWrapper, SelectedBillWrapper } from "../payBillsStyles";
import ConfirmElectricityBillModal from "./widgets/confirmElectBillPayModal";
import ElectBillPaySuccessModal from "./widgets/ElectBillPaySuccessModal";
import SelectServiceProviderModal from "./widgets/selectServiceProviderModal";

const ElectricityBill = () => {
  const selectedProvider = electricityBillStates.use().selectedProvider;

  const [readOnly, setReadOnly] = useState(false);

  const [formField, setFormField] = useState({
    cardNumber: "",
    amount: "",
  });

  const formIsFilled = Object.values(formField).every(
    (val) => val !== "" && selectedProvider
  );

  const handleRefill = () => {
    setShowConfirmElectricityPayModal(true);
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
  return (
    <SelectedBillWrapper>
      <div className="billcard-cont">
        <BillCard
          isHorizontal
          isActive
          bgColor="#F2F2F2"
          title="Electricity Bill"
          icon={<ElectrictyOutlineIcon />}
        />
      </div>
      <div className="title-cont">
        <HorizontalLinedTitle text="Billing Details" />
      </div>
      <FormWrapper>
        <div className="airtime-form">
          <div className="inputField-wrapper">
            <Selector
              selectorTitle={selectedProvider || "Select Service Provider"}
              onClick={() => setShowSelectProvider(true)}
              mt="1rem"
            />
            <Input
              placeholder="e.g 0000 0000 0000"
              label="Card/Meter Number"
              value={formField.cardNumber}
              maxLength={11}
              onChange={(e) =>
                setFormField({
                  ...formField,
                  cardNumber: e.target.value,
                })
              }
              width={"27rem"}
              mt={"1.5rem"}
            />
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
      <ConfirmElectricityBillModal
        cardNumber={formField.cardNumber}
        amount={formField.amount}
      />
      <SelectServiceProviderModal />
      <ElectBillPaySuccessModal
        cardNumber={formField.cardNumber}
        amount={formField.amount}
      />
    </SelectedBillWrapper>
  );
};

export default ElectricityBill;
