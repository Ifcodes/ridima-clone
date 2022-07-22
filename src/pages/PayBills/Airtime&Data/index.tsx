import React, { useEffect, useState } from "react";
import BillCard from "../../../components/atoms/BillCard";
import Button from "../../../components/atoms/Buttons";
import AddMinusInput from "../../../components/atoms/Forms/AddMinusInput";
import Input from "../../../components/atoms/Forms/Input";
import Selector from "../../../components/atoms/Selector";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import TelephoneOutlineIcon from "../../../components/atoms/vectors/TelephoneIcon";
import {
  airtimeDataStates,
  resetAirtimeDataState,
  setShowAirtimeSuccessMsg,
  setShowDataRefillSuccessMsg,
  setShowNetworksModal,
  setShowSelectDataPlan,
  setShowServiceModal,
} from "../../../Entity/AirtimeAndDataEntity";
import { FormWrapper, SelectedBillWrapper } from "../payBillsStyles";
import AirtimeRefillSuccessMsg from "./widgets/airtimeRefillSuccessMsg";
import DataRefilledSuccessMsg from "./widgets/dataRefillSuccessMsg";
import SelectDataPlanModal from "./widgets/selectDataPlan";
import SelectNetworkModal from "./widgets/selectNetwork";
import SelectServiceModal from "./widgets/selectServiceModal";

const AirtimeAndData = () => {
  const airtimeDataState = airtimeDataStates.use();
  const selectedService = airtimeDataState.selectedService;
  const selectedNetwork = airtimeDataState.selectedNetwork;
  const selectedPlan = airtimeDataState.selectedDataPlan;
  const [readOnly, setReadOnly] = useState(false);
  const [airtimeFormField, setAirtimeFormField] = useState({
    phoneNumber: "",
    airtimeAmount: "",
  });

  const airtimeFormIsFilled = Object.values(airtimeFormField).every(
    (val) => val !== "" && selectedNetwork && selectedService
  );

  const handleAddMinus = (type: string) => {
    setReadOnly(true);
    const value = Number(airtimeFormField.airtimeAmount);
    if (type === "add") {
      setAirtimeFormField({
        ...airtimeFormField,
        airtimeAmount: (value + 50).toLocaleString(),
      });
    }
    if (type === "minus") {
      setAirtimeFormField({
        ...airtimeFormField,
        airtimeAmount: (value - 50).toLocaleString(),
      });
    }
  };

  const handleRefill = () => {
    if (selectedService === "Airtime") {
      setShowAirtimeSuccessMsg(true);
    }
    if (selectedService === "Data") {
      setShowDataRefillSuccessMsg(true);
    }
    return;
  };

  const onFocus = (type: boolean) => {
    setReadOnly(type);
  };

  const handleClearForm = () => {
    setAirtimeFormField({ phoneNumber: "", airtimeAmount: "" });
  };

  return (
    <SelectedBillWrapper>
      <div className="billcard-cont">
        <BillCard
          isHorizontal
          isActive
          bgColor="#EBE9FB"
          title="Airtime & Data"
          icon={<TelephoneOutlineIcon />}
        />
      </div>
      <div className="title-cont">
        <HorizontalLinedTitle text="Network Details" />
      </div>
      <FormWrapper isData={selectedService === "Data"}>
        <div className="airtime-form">
          <div className="inputField-wrapper">
            <Selector
              selectorTitle={selectedService || "Select Service"}
              onClick={() => setShowServiceModal(true)}
              mt="1rem"
            />
            <Selector
              selectorTitle={selectedNetwork || "Select Network"}
              onClick={() => setShowNetworksModal(true)}
              mt="1.5rem"
            />
          </div>
          <div className="inputField-wrapper">
            {selectedService === "Data" && (
              <Selector
                selectorTitle={selectedPlan || "Select Data Plan"}
                onClick={() => setShowSelectDataPlan(true)}
                mt="1.5rem"
              />
            )}
            <Input
              placeholder="e.g 0000 0000 0000"
              label="Recipient phone number"
              value={airtimeFormField.phoneNumber}
              maxLength={11}
              onChange={(e) =>
                setAirtimeFormField({
                  ...airtimeFormField,
                  phoneNumber: e.target.value,
                })
              }
              width={"27rem"}
              mt={"1.5rem"}
            />
          </div>
          <div className="amount-cont">
            <span className="enter-amount">
              {selectedService === "Data" ? "Data Cost" : "Enter Amount"}
            </span>
            {selectedService === "Airtime" && (
              <AddMinusInput
                inputValue={airtimeFormField.airtimeAmount}
                placeholder="₦0"
                symbol={airtimeFormField.airtimeAmount ? "₦" : ""}
                isReadOnly={readOnly}
                handleButtons={handleAddMinus}
                onChange={(e) =>
                  setAirtimeFormField({
                    ...airtimeFormField,
                    airtimeAmount: e.target.value,
                  })
                }
                setFocus={onFocus}
              />
            )}
            {selectedService === "Data" && (
              <Input
                placeholder="₦0"
                symbol={airtimeFormField.airtimeAmount ? "₦" : ""}
                value={airtimeFormField.airtimeAmount}
                onChange={(e) =>
                  setAirtimeFormField({
                    ...airtimeFormField,
                    airtimeAmount: e.target.value,
                  })
                }
              />
            )}
          </div>
        </div>
        <Button
          btnText="Refill"
          width="27rem"
          disabled={!airtimeFormIsFilled}
          onClick={() => handleRefill()}
          mb="6rem"
          mt="6rem"
        />
      </FormWrapper>
      <SelectServiceModal />
      <SelectNetworkModal />
      <SelectDataPlanModal />
      <AirtimeRefillSuccessMsg
        amount={airtimeFormField.airtimeAmount}
        phoneNumber={airtimeFormField.phoneNumber}
        handleClear={() => handleClearForm()}
      />
      <DataRefilledSuccessMsg
        amount={airtimeFormField.airtimeAmount}
        phoneNumber={airtimeFormField.phoneNumber}
        handleClear={() => handleClearForm()}
      />
    </SelectedBillWrapper>
  );
};

export default AirtimeAndData;
