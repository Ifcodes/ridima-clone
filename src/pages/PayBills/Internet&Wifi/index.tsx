import React, { useState } from "react";
import BillCard from "../../../components/atoms/BillCard";
import Button from "../../../components/atoms/Buttons";
import Input from "../../../components/atoms/Forms/Input";
import Selector from "../../../components/atoms/Selector";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import WifiOutlineIcon from "../../../components/atoms/vectors/WifiOutlineIcon";
import {
  internetWifiStates,
  setShowConfirmWifiPurchaseModal,
  setShowInternetPlanModal,
  setShowNetworkProviderModal,
} from "../../../Entity/InteretAndWifiEntity";
import { FormWrapper, SelectedBillWrapper } from "../payBillsStyles";
import ConfirmInternetPurchaseModal from "./widgets/confirmModal";
import InternetWifiSuccessMsgModal from "./widgets/internetSuccessMsg";
import SelectInteretPlanModal from "./widgets/selectInternetPlan";
import SelectNetworkProviderModal from "./widgets/selectNetworkProvider";

const InternetAndWifi = () => {
  const internetWifiState = internetWifiStates.use();
  const selectedNetwork = internetWifiState.selectedNetworkProvider;
  const selectedInternetPlan = internetWifiState.selectedInternetPlan;
  const selectedPlanAmount = internetWifiState.selectedInternetPlanAmount;

  const [formField, setFormField] = useState({
    deviceNumber: "",
  });

  const formIsFilled = Object.values(formField).every(
    (val) => val !== "" && selectedNetwork && selectedInternetPlan
  );

  const handleRefill = () => {
    setShowConfirmWifiPurchaseModal(true);
  };

  const clearForm = () => {
    setFormField({ deviceNumber: "" });
  };
  return (
    <SelectedBillWrapper>
      <div className="billcard-cont">
        <BillCard
          isHorizontal
          isActive
          bgColor="#FAE69E"
          title="Internet & Wifi"
          icon={<WifiOutlineIcon />}
        />
      </div>
      <div className="title-cont">
        <HorizontalLinedTitle text="Network Details" />
      </div>
      <FormWrapper>
        <div className="airtime-form">
          <div className="inputField-wrapper">
            <Selector
              selectorTitle={selectedNetwork || "Select Network Provider"}
              onClick={() => setShowNetworkProviderModal(true)}
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
              selectorTitle={selectedInternetPlan || "Select Internet Plan"}
              onClick={() => setShowInternetPlanModal(true)}
              mt="1rem"
            />

            <div className="amount-cont">
              <span className="enter-amount">Internet Cost</span>

              <Input
                placeholder="₦0"
                symbol=""
                value={`₦${selectedPlanAmount.toLocaleString()}`}
                readOnly
              />
            </div>
          </div>
        </div>
        <Button
          btnText="Subscribe"
          width="27rem"
          disabled={!formIsFilled}
          onClick={() => handleRefill()}
          // mb="6rem"
          mt="6rem"
        />
      </FormWrapper>
      <SelectNetworkProviderModal />
      <SelectInteretPlanModal />
      <ConfirmInternetPurchaseModal
        deviceNumber={formField.deviceNumber}
        amount={selectedPlanAmount.toLocaleString()}
      />
      <InternetWifiSuccessMsgModal
        deviceNumber={formField.deviceNumber}
        amount={selectedPlanAmount.toLocaleString()}
        handleClear={clearForm}
      />
    </SelectedBillWrapper>
  );
};

export default InternetAndWifi;
