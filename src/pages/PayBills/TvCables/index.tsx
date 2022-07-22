import React, { useState } from "react";
import BillCard from "../../../components/atoms/BillCard";
import Button from "../../../components/atoms/Buttons";
import Input from "../../../components/atoms/Forms/Input";
import Selector from "../../../components/atoms/Selector";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import TvOulineIcon from "../../../components/atoms/vectors/TVIcon";
import {
  setShowConfirmTvCableModal,
  setShowServiceProviderModal,
  setShowTvCablePlanModal,
  tvCableStates,
} from "../../../Entity/TvCablesEntity";
import { FormWrapper, SelectedBillWrapper } from "../payBillsStyles";
import ConfirmTvCablePurchaseModal from "./widgets/confirmTvCableModal";
import SelectCableServiceProviderModal from "./widgets/selectServiceProvider";
import SelectTvCablePlanModal from "./widgets/selectTvCablePlanModal";
import TvCableSuccessMsgModal from "./widgets/tvCableSuccessMsg";

const TvCables = () => {
  const tvCableState = tvCableStates.use();
  const selectedProvider = tvCableState.selectedServiceProvider;

  const selectedCablePlan = tvCableState.selectedTvCablePlan;

  const [formField, setFormField] = useState({
    deviceNumber: "",
    amount: "",
  });

  const formIsFilled = Object.values(formField).every(
    (val) => val !== "" && selectedProvider && selectedCablePlan
  );

  const handleRefill = () => {
    setShowConfirmTvCableModal(true);
  };

  const clearForm = () => {
    setFormField({
      deviceNumber: "",
      amount: "",
    });
  };
  return (
    <SelectedBillWrapper>
      <div className="billcard-cont">
        <BillCard
          isHorizontal
          isActive
          bgColor="#F5EDF8"
          title="Tv Cables"
          icon={<TvOulineIcon />}
        />
      </div>
      <div className="title-cont">
        <HorizontalLinedTitle text="Tv Cable Details" />
      </div>
      <FormWrapper>
        <div className="airtime-form">
          <div className="inputField-wrapper">
            <Selector
              selectorTitle={selectedProvider || "Select Service Provider"}
              onClick={() => setShowServiceProviderModal(true)}
              mt="1rem"
            />
            <Input
              placeholder="e.g 0000 0000 0000"
              label="Enter device number"
              value={formField.deviceNumber}
              maxLength={11}
              onChange={(e) =>
                setFormField({
                  ...formField,
                  deviceNumber: e.target.value,
                })
              }
              width={"27rem"}
              mt={"1.5rem"}
            />

            <Selector
              selectorTitle={selectedCablePlan || "Select Plan"}
              onClick={() => setShowTvCablePlanModal(true)}
              mt="1rem"
            />

            <div className="amount-cont">
              <span className="enter-amount">Tv Cable Cost</span>

              <Input
                placeholder="₦0"
                symbol={formField.amount ? "₦" : ""}
                value={formField.amount}
                onChange={(e) =>
                  setFormField({
                    ...formField,
                    amount: e.target.value,
                  })
                }
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
      <SelectCableServiceProviderModal />
      <SelectTvCablePlanModal />
      <ConfirmTvCablePurchaseModal
        deviceNumber={formField.deviceNumber}
        amount={formField.amount}
      />
      <TvCableSuccessMsgModal
        deviceNumber={formField.deviceNumber}
        amount={formField.amount}
        handleClear={() => clearForm()}
      />
    </SelectedBillWrapper>
  );
};

export default TvCables;
